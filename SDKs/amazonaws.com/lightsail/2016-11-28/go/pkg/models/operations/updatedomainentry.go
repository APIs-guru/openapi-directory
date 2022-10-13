package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDomainEntryXAmzTargetEnum string

const (
	UpdateDomainEntryXAmzTargetEnumLightsail20161128UpdateDomainEntry UpdateDomainEntryXAmzTargetEnum = "Lightsail_20161128.UpdateDomainEntry"
)

type UpdateDomainEntryHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDomainEntryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateDomainEntryRequest struct {
	Headers UpdateDomainEntryHeaders
	Request shared.UpdateDomainEntryRequest `request:"mediaType=application/json"`
}

type UpdateDomainEntryResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
	UpdateDomainEntryResult         *shared.UpdateDomainEntryResult
}
