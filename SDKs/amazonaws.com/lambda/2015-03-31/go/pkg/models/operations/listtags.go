package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsPathParams struct {
	Arn string `pathParam:"style=simple,explode=false,name=ARN"`
}

type ListTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListTagsRequest struct {
	PathParams ListTagsPathParams
	Headers    ListTagsHeaders
}

type ListTagsResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	ListTagsResponse               *shared.ListTagsResponse
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
