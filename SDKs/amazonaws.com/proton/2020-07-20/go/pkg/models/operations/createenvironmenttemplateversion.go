package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEnvironmentTemplateVersionXAmzTargetEnum string

const (
	CreateEnvironmentTemplateVersionXAmzTargetEnumAwsProton20200720CreateEnvironmentTemplateVersion CreateEnvironmentTemplateVersionXAmzTargetEnum = "AwsProton20200720.CreateEnvironmentTemplateVersion"
)

type CreateEnvironmentTemplateVersionHeaders struct {
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEnvironmentTemplateVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
