package operations

import (
	"openapi/pkg/models/shared"
)

type ListAppImageConfigsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAppImageConfigsXAmzTargetEnum string

const (
	ListAppImageConfigsXAmzTargetEnumSageMakerListAppImageConfigs ListAppImageConfigsXAmzTargetEnum = "SageMaker.ListAppImageConfigs"
)

type ListAppImageConfigsHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAppImageConfigsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListAppImageConfigsRequest struct {
	QueryParams ListAppImageConfigsQueryParams
	Headers     ListAppImageConfigsHeaders
	Request     shared.ListAppImageConfigsRequest `request:"mediaType=application/json"`
}

type ListAppImageConfigsResponse struct {
	ContentType                 string
	ListAppImageConfigsResponse *shared.ListAppImageConfigsResponse
	StatusCode                  int64
}
