package operations

import (
	"openapi/pkg/models/shared"
)

type TagResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type TagResourceRequestBody struct {
	ResourceArn string       `json:"ResourceARN"`
	Tags        []shared.Tag `json:"Tags"`
}

type TagResourceRequest struct {
	Headers TagResourceHeaders
	Request TagResourceRequestBody `request:"mediaType=application/json"`
}

type TagResourceResponse struct {
	ContentType               string
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TagResourceResponse       map[string]interface{}
	ThrottledException        *interface{}
	TooManyTagsException      *interface{}
}
