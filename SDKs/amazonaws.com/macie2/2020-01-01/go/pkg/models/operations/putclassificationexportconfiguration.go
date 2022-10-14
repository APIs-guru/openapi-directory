package operations

import (
	"openapi/pkg/models/shared"
)

type PutClassificationExportConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutClassificationExportConfigurationRequestBodyConfiguration struct {
	S3Destination *shared.S3Destination `json:"s3Destination,omitempty"`
}

type PutClassificationExportConfigurationRequestBody struct {
	Configuration PutClassificationExportConfigurationRequestBodyConfiguration `json:"configuration"`
}

type PutClassificationExportConfigurationRequest struct {
	Headers PutClassificationExportConfigurationHeaders
	Request PutClassificationExportConfigurationRequestBody `request:"mediaType=application/json"`
}

type PutClassificationExportConfigurationResponse struct {
	AccessDeniedException                        *interface{}
	ConflictException                            *interface{}
	ContentType                                  string
	InternalServerException                      *interface{}
	PutClassificationExportConfigurationResponse *shared.PutClassificationExportConfigurationResponse
	ResourceNotFoundException                    *interface{}
	ServiceQuotaExceededException                *interface{}
	StatusCode                                   int64
	ThrottlingException                          *interface{}
	ValidationException                          *interface{}
}
