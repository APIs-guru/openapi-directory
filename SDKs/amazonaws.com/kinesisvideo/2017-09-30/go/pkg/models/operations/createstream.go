package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateStreamRequestBody struct {
	DataRetentionInHours *int64            `json:"DataRetentionInHours"`
	DeviceName           *string           `json:"DeviceName"`
	KmsKeyID             *string           `json:"KmsKeyId"`
	MediaType            *string           `json:"MediaType"`
	StreamName           string            `json:"StreamName"`
	Tags                 map[string]string `json:"Tags"`
}

type CreateStreamRequest struct {
	Headers CreateStreamHeaders
	Request CreateStreamRequestBody `request:"mediaType=application/json"`
}

type CreateStreamResponse struct {
	AccountStreamLimitExceededException   *interface{}
	ClientLimitExceededException          *interface{}
	ContentType                           string
	CreateStreamOutput                    *shared.CreateStreamOutput
	DeviceStreamLimitExceededException    *interface{}
	InvalidArgumentException              *interface{}
	InvalidDeviceException                *interface{}
	ResourceInUseException                *interface{}
	StatusCode                            int64
	TagsPerResourceExceededLimitException *interface{}
}
