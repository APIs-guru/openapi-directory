package operations

import (
	"openapi/pkg/models/shared"
)

type PutClassificationExportConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// PutClassificationExportConfigurationRequestBodyConfiguration
// Specifies where to store data classification results, and the encryption settings to use when storing results in that location. Currently, you can store classification results only in an S3 bucket.
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
