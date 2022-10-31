package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWorldTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateWorldTemplateRequestBodyTemplateLocation struct {
	S3Bucket *string `json:"s3Bucket,omitempty"`
	S3Key    *string `json:"s3Key,omitempty"`
}

type UpdateWorldTemplateRequestBody struct {
	Name             *string                                         `json:"name,omitempty"`
	Template         string                                          `json:"template"`
	TemplateBody     *string                                         `json:"templateBody,omitempty"`
	TemplateLocation *UpdateWorldTemplateRequestBodyTemplateLocation `json:"templateLocation,omitempty"`
}

type UpdateWorldTemplateRequest struct {
	Headers UpdateWorldTemplateHeaders
	Request UpdateWorldTemplateRequestBody `request:"mediaType=application/json"`
}

type UpdateWorldTemplateResponse struct {
	ContentType                 string
	InternalServerException     *interface{}
	InvalidParameterException   *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UpdateWorldTemplateResponse *shared.UpdateWorldTemplateResponse
}
