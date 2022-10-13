package operations

import (
	"openapi/pkg/models/shared"
)

type GetEnvironmentAccountConnectionXAmzTargetEnum string

const (
	GetEnvironmentAccountConnectionXAmzTargetEnumAwsProton20200720GetEnvironmentAccountConnection GetEnvironmentAccountConnectionXAmzTargetEnum = "AwsProton20200720.GetEnvironmentAccountConnection"
)

type GetEnvironmentAccountConnectionHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetEnvironmentAccountConnectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetEnvironmentAccountConnectionRequest struct {
	Headers GetEnvironmentAccountConnectionHeaders
	Request shared.GetEnvironmentAccountConnectionInput `request:"mediaType=application/json"`
}

type GetEnvironmentAccountConnectionResponse struct {
	AccessDeniedException                 *interface{}
	ContentType                           string
	GetEnvironmentAccountConnectionOutput *shared.GetEnvironmentAccountConnectionOutput
	InternalServerException               *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
	ThrottlingException                   *interface{}
	ValidationException                   *interface{}
}
