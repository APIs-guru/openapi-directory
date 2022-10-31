package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServiceTemplateVersionXAmzTargetEnum string

const (
	UpdateServiceTemplateVersionXAmzTargetEnumAwsProton20200720UpdateServiceTemplateVersion UpdateServiceTemplateVersionXAmzTargetEnum = "AwsProton20200720.UpdateServiceTemplateVersion"
)

type UpdateServiceTemplateVersionHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateServiceTemplateVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
