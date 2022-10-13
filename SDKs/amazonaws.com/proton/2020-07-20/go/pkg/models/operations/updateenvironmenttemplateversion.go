package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEnvironmentTemplateVersionXAmzTargetEnum string

const (
	UpdateEnvironmentTemplateVersionXAmzTargetEnumAwsProton20200720UpdateEnvironmentTemplateVersion UpdateEnvironmentTemplateVersionXAmzTargetEnum = "AwsProton20200720.UpdateEnvironmentTemplateVersion"
)

type UpdateEnvironmentTemplateVersionHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateEnvironmentTemplateVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateEnvironmentTemplateVersionRequest struct {
	Headers UpdateEnvironmentTemplateVersionHeaders
	Request shared.UpdateEnvironmentTemplateVersionInput `request:"mediaType=application/json"`
}

type UpdateEnvironmentTemplateVersionResponse struct {
	AccessDeniedException                  *interface{}
	ConflictException                      *interface{}
	ContentType                            string
	InternalServerException                *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
	UpdateEnvironmentTemplateVersionOutput *shared.UpdateEnvironmentTemplateVersionOutput
	ValidationException                    *interface{}
}
