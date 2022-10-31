package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsPathParams struct {
	Arn string `pathParam:"style=simple,explode=false,name=ARN"`
}

type ListTagsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
