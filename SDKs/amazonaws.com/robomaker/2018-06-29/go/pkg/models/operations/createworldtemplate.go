package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorldTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateWorldTemplateRequestBodyTemplateLocation struct {
	S3Bucket *string `json:"s3Bucket,omitempty"`
	S3Key    *string `json:"s3Key,omitempty"`
}

type CreateWorldTemplateRequestBody struct {
	ClientRequestToken *string                                         `json:"clientRequestToken,omitempty"`
	Name               *string                                         `json:"name,omitempty"`
	Tags               map[string]string                               `json:"tags,omitempty"`
	TemplateBody       *string                                         `json:"templateBody,omitempty"`
	TemplateLocation   *CreateWorldTemplateRequestBodyTemplateLocation `json:"templateLocation,omitempty"`
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
