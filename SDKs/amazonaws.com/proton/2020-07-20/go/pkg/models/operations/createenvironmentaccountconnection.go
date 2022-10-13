package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEnvironmentAccountConnectionXAmzTargetEnum string

const (
	CreateEnvironmentAccountConnectionXAmzTargetEnumAwsProton20200720CreateEnvironmentAccountConnection CreateEnvironmentAccountConnectionXAmzTargetEnum = "AwsProton20200720.CreateEnvironmentAccountConnection"
)

type CreateEnvironmentAccountConnectionHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEnvironmentAccountConnectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateEnvironmentAccountConnectionRequest struct {
	Headers CreateEnvironmentAccountConnectionHeaders
	Request shared.CreateEnvironmentAccountConnectionInput `request:"mediaType=application/json"`
}

type CreateEnvironmentAccountConnectionResponse struct {
	AccessDeniedException                    *interface{}
	ConflictException                        *interface{}
	ContentType                              string
	CreateEnvironmentAccountConnectionOutput *shared.CreateEnvironmentAccountConnectionOutput
	InternalServerException                  *interface{}
	ServiceQuotaExceededException            *interface{}
	StatusCode                               int64
	ThrottlingException                      *interface{}
	ValidationException                      *interface{}
}
