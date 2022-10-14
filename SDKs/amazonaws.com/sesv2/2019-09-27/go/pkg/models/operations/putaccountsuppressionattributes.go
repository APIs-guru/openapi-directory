package operations

import (
	"openapi/pkg/models/shared"
)

type PutAccountSuppressionAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutAccountSuppressionAttributesRequestBody struct {
	SuppressedReasons []shared.SuppressionListReasonEnum `json:"SuppressedReasons,omitempty"`
}

type PutAccountSuppressionAttributesRequest struct {
	Headers PutAccountSuppressionAttributesHeaders
	Request PutAccountSuppressionAttributesRequestBody `request:"mediaType=application/json"`
}

type PutAccountSuppressionAttributesResponse struct {
	BadRequestException                     *interface{}
	ContentType                             string
	PutAccountSuppressionAttributesResponse map[string]interface{}
	StatusCode                              int64
	TooManyRequestsException                *interface{}
}
