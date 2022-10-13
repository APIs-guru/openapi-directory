package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDomainEntryXAmzTargetEnum string

const (
	DeleteDomainEntryXAmzTargetEnumLightsail20161128DeleteDomainEntry DeleteDomainEntryXAmzTargetEnum = "Lightsail_20161128.DeleteDomainEntry"
)

type DeleteDomainEntryHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDomainEntryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDomainEntryRequest struct {
	Headers DeleteDomainEntryHeaders
	Request shared.DeleteDomainEntryRequest `request:"mediaType=application/json"`
}

type DeleteDomainEntryResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	DeleteDomainEntryResult         *shared.DeleteDomainEntryResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
