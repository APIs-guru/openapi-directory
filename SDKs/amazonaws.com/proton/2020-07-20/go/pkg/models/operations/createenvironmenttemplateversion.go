package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEnvironmentTemplateVersionXAmzTargetEnum string

const (
	CreateEnvironmentTemplateVersionXAmzTargetEnumAwsProton20200720CreateEnvironmentTemplateVersion CreateEnvironmentTemplateVersionXAmzTargetEnum = "AwsProton20200720.CreateEnvironmentTemplateVersion"
)

type CreateEnvironmentTemplateVersionHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEnvironmentTemplateVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateEnvironmentTemplateVersionRequest struct {
	Headers CreateEnvironmentTemplateVersionHeaders
	Request shared.CreateEnvironmentTemplateVersionInput `request:"mediaType=application/json"`
}

type CreateEnvironmentTemplateVersionResponse struct {
	AccessDeniedException                  *interface{}
	ConflictException                      *interface{}
	ContentType                            string
	CreateEnvironmentTemplateVersionOutput *shared.CreateEnvironmentTemplateVersionOutput
	InternalServerException                *interface{}
	ResourceNotFoundException              *interface{}
	ServiceQuotaExceededException          *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
	ValidationException                    *interface{}
}
