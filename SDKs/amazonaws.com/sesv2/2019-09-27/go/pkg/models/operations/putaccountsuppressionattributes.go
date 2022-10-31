package operations

import (
	"openapi/pkg/models/shared"
)

type PutAccountSuppressionAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
