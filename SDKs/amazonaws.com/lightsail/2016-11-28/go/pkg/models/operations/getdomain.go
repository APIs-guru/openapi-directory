package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainXAmzTargetEnum string

const (
	GetDomainXAmzTargetEnumLightsail20161128GetDomain GetDomainXAmzTargetEnum = "Lightsail_20161128.GetDomain"
)

type GetDomainHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDomainXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDomainRequest struct {
	Headers GetDomainHeaders
	Request shared.GetDomainRequest `request:"mediaType=application/json"`
}

type GetDomainResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetDomainResult                 *shared.GetDomainResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
