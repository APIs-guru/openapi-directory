package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssociatedRoute53HealthChecksPathParams struct {
	RoutingControlArn string `pathParam:"style=simple,explode=false,name=RoutingControlArn"`
}

type ListAssociatedRoute53HealthChecksQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAssociatedRoute53HealthChecksHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListAssociatedRoute53HealthChecksRequest struct {
	PathParams  ListAssociatedRoute53HealthChecksPathParams
	QueryParams ListAssociatedRoute53HealthChecksQueryParams
	Headers     ListAssociatedRoute53HealthChecksHeaders
}

type ListAssociatedRoute53HealthChecksResponse struct {
	ContentType                               string
	InternalServerException                   *interface{}
	ListAssociatedRoute53HealthChecksResponse *shared.ListAssociatedRoute53HealthChecksResponse
	ResourceNotFoundException                 *interface{}
	StatusCode                                int64
	ValidationException                       *interface{}
}
