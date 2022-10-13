package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServiceTemplateVersionXAmzTargetEnum string

const (
	UpdateServiceTemplateVersionXAmzTargetEnumAwsProton20200720UpdateServiceTemplateVersion UpdateServiceTemplateVersionXAmzTargetEnum = "AwsProton20200720.UpdateServiceTemplateVersion"
)

type UpdateServiceTemplateVersionHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateServiceTemplateVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateServiceTemplateVersionRequest struct {
	Headers UpdateServiceTemplateVersionHeaders
	Request shared.UpdateServiceTemplateVersionInput `request:"mediaType=application/json"`
}

type UpdateServiceTemplateVersionResponse struct {
	AccessDeniedException              *interface{}
	ConflictException                  *interface{}
	ContentType                        string
	InternalServerException            *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
	UpdateServiceTemplateVersionOutput *shared.UpdateServiceTemplateVersionOutput
	ValidationException                *interface{}
}
