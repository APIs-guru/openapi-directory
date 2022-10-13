package operations

import (
	"openapi/pkg/models/shared"
)

type RejectEnvironmentAccountConnectionXAmzTargetEnum string

const (
	RejectEnvironmentAccountConnectionXAmzTargetEnumAwsProton20200720RejectEnvironmentAccountConnection RejectEnvironmentAccountConnectionXAmzTargetEnum = "AwsProton20200720.RejectEnvironmentAccountConnection"
)

type RejectEnvironmentAccountConnectionHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RejectEnvironmentAccountConnectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RejectEnvironmentAccountConnectionRequest struct {
	Headers RejectEnvironmentAccountConnectionHeaders
	Request shared.RejectEnvironmentAccountConnectionInput `request:"mediaType=application/json"`
}

type RejectEnvironmentAccountConnectionResponse struct {
	AccessDeniedException                    *interface{}
	ConflictException                        *interface{}
	ContentType                              string
	InternalServerException                  *interface{}
	RejectEnvironmentAccountConnectionOutput *shared.RejectEnvironmentAccountConnectionOutput
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	ThrottlingException                      *interface{}
	ValidationException                      *interface{}
}
