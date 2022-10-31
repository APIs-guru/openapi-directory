package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEnvironmentAccountConnectionXAmzTargetEnum string

const (
	UpdateEnvironmentAccountConnectionXAmzTargetEnumAwsProton20200720UpdateEnvironmentAccountConnection UpdateEnvironmentAccountConnectionXAmzTargetEnum = "AwsProton20200720.UpdateEnvironmentAccountConnection"
)

type UpdateEnvironmentAccountConnectionHeaders struct {
	XAmzAlgorithm     *string                                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateEnvironmentAccountConnectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateEnvironmentAccountConnectionRequest struct {
	Headers UpdateEnvironmentAccountConnectionHeaders
	Request shared.UpdateEnvironmentAccountConnectionInput `request:"mediaType=application/json"`
}

type UpdateEnvironmentAccountConnectionResponse struct {
	AccessDeniedException                    *interface{}
	ConflictException                        *interface{}
	ContentType                              string
	InternalServerException                  *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	ThrottlingException                      *interface{}
	UpdateEnvironmentAccountConnectionOutput *shared.UpdateEnvironmentAccountConnectionOutput
	ValidationException                      *interface{}
}
