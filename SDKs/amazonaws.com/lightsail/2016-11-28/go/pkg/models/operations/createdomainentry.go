package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomainEntryXAmzTargetEnum string

const (
	CreateDomainEntryXAmzTargetEnumLightsail20161128CreateDomainEntry CreateDomainEntryXAmzTargetEnum = "Lightsail_20161128.CreateDomainEntry"
)

type CreateDomainEntryHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDomainEntryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDomainEntryRequest struct {
	Headers CreateDomainEntryHeaders
	Request shared.CreateDomainEntryRequest `request:"mediaType=application/json"`
}

type CreateDomainEntryResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	CreateDomainEntryResult         *shared.CreateDomainEntryResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
