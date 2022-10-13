package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorldTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateWorldTemplateRequestBodyTemplateLocation struct {
	S3Bucket *string `json:"s3Bucket"`
	S3Key    *string `json:"s3Key"`
}

type CreateWorldTemplateRequestBody struct {
	ClientRequestToken *string                                         `json:"clientRequestToken"`
	Name               *string                                         `json:"name"`
	Tags               map[string]string                               `json:"tags"`
	TemplateBody       *string                                         `json:"templateBody"`
	TemplateLocation   *CreateWorldTemplateRequestBodyTemplateLocation `json:"templateLocation"`
}

type CreateWorldTemplateRequest struct {
	Headers CreateWorldTemplateHeaders
	Request CreateWorldTemplateRequestBody `request:"mediaType=application/json"`
}

type CreateWorldTemplateResponse struct {
	ContentType                    string
	CreateWorldTemplateResponse    *shared.CreateWorldTemplateResponse
	InternalServerException        *interface{}
	InvalidParameterException      *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
