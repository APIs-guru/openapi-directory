package operations

import (
	"openapi/pkg/models/shared"
)

type ListOperationsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListOperationsXAmzTargetEnum string

const (
	ListOperationsXAmzTargetEnumRoute53AutoNamingV20170314ListOperations ListOperationsXAmzTargetEnum = "Route53AutoNaming_v20170314.ListOperations"
)

type ListOperationsHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListOperationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListOperationsRequest struct {
	QueryParams ListOperationsQueryParams
	Headers     ListOperationsHeaders
	Request     shared.ListOperationsRequest `request:"mediaType=application/json"`
}

type ListOperationsResponse struct {
	ContentType            string
	InvalidInput           *interface{}
	ListOperationsResponse *shared.ListOperationsResponse
	StatusCode             int64
}
