package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptEnvironmentAccountConnectionXAmzTargetEnum string

const (
	AcceptEnvironmentAccountConnectionXAmzTargetEnumAwsProton20200720AcceptEnvironmentAccountConnection AcceptEnvironmentAccountConnectionXAmzTargetEnum = "AwsProton20200720.AcceptEnvironmentAccountConnection"
)

type AcceptEnvironmentAccountConnectionHeaders struct {
	XAmzAlgorithm     *string                                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AcceptEnvironmentAccountConnectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AcceptEnvironmentAccountConnectionRequest struct {
	Headers AcceptEnvironmentAccountConnectionHeaders
	Request shared.AcceptEnvironmentAccountConnectionInput `request:"mediaType=application/json"`
}

type AcceptEnvironmentAccountConnectionResponse struct {
	AcceptEnvironmentAccountConnectionOutput *shared.AcceptEnvironmentAccountConnectionOutput
	AccessDeniedException                    *interface{}
	ConflictException                        *interface{}
	ContentType                              string
	InternalServerException                  *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	ThrottlingException                      *interface{}
	ValidationException                      *interface{}
}
