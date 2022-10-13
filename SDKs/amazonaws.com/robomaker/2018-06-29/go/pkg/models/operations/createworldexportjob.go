package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorldExportJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateWorldExportJobRequestBodyOutputLocation struct {
	S3Bucket *string `json:"s3Bucket"`
	S3Prefix *string `json:"s3Prefix"`
}

type CreateWorldExportJobRequestBody struct {
	ClientRequestToken *string                                       `json:"clientRequestToken"`
	IamRole            string                                        `json:"iamRole"`
	OutputLocation     CreateWorldExportJobRequestBodyOutputLocation `json:"outputLocation"`
	Tags               map[string]string                             `json:"tags"`
	Worlds             []string                                      `json:"worlds"`
}

type CreateWorldExportJobRequest struct {
	Headers CreateWorldExportJobHeaders
	Request CreateWorldExportJobRequestBody `request:"mediaType=application/json"`
}

type CreateWorldExportJobResponse struct {
	ContentType                          string
	CreateWorldExportJobResponse         *shared.CreateWorldExportJobResponse
	IdempotentParameterMismatchException *interface{}
	InternalServerException              *interface{}
	InvalidParameterException            *interface{}
	ResourceNotFoundException            *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
}
