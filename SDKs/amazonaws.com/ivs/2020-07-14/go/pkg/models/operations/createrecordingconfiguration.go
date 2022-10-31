package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRecordingConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateRecordingConfigurationRequestBodyDestinationConfiguration struct {
	S3 *shared.S3DestinationConfiguration `json:"s3,omitempty"`
}

type CreateRecordingConfigurationRequestBody struct {
	DestinationConfiguration CreateRecordingConfigurationRequestBodyDestinationConfiguration `json:"destinationConfiguration"`
	Name                     *string                                                         `json:"name,omitempty"`
	Tags                     map[string]string                                               `json:"tags,omitempty"`
}

type CreateRecordingConfigurationRequest struct {
	Headers CreateRecordingConfigurationHeaders
	Request CreateRecordingConfigurationRequestBody `request:"mediaType=application/json"`
}

type CreateRecordingConfigurationResponse struct {
	AccessDeniedException                *interface{}
	ConflictException                    *interface{}
	ContentType                          string
	CreateRecordingConfigurationResponse *shared.CreateRecordingConfigurationResponse
	InternalServerException              *interface{}
	PendingVerification                  *interface{}
	ServiceQuotaExceededException        *interface{}
	StatusCode                           int64
	ValidationException                  *interface{}
}
