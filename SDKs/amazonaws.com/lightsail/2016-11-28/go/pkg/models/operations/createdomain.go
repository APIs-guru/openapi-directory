package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomainXAmzTargetEnum string

const (
	CreateDomainXAmzTargetEnumLightsail20161128CreateDomain CreateDomainXAmzTargetEnum = "Lightsail_20161128.CreateDomain"
)

type CreateDomainHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDomainXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDomainRequest struct {
	Headers CreateDomainHeaders
	Request shared.CreateDomainRequest `request:"mediaType=application/json"`
}

type CreateDomainResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	CreateDomainResult              *shared.CreateDomainResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
