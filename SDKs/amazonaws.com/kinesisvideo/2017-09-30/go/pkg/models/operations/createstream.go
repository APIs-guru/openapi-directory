package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStreamHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateStreamRequestBody struct {
	DataRetentionInHours *int64            `json:"DataRetentionInHours,omitempty"`
	DeviceName           *string           `json:"DeviceName,omitempty"`
	KmsKeyID             *string           `json:"KmsKeyId,omitempty"`
	MediaType            *string           `json:"MediaType,omitempty"`
	StreamName           string            `json:"StreamName"`
	Tags                 map[string]string `json:"Tags,omitempty"`
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
