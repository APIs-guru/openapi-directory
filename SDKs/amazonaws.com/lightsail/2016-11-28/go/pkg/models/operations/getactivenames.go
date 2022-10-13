package operations

import (
	"openapi/pkg/models/shared"
)

type GetActiveNamesXAmzTargetEnum string

const (
	GetActiveNamesXAmzTargetEnumLightsail20161128GetActiveNames GetActiveNamesXAmzTargetEnum = "Lightsail_20161128.GetActiveNames"
)

type GetActiveNamesHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetActiveNamesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetActiveNamesRequest struct {
	Headers GetActiveNamesHeaders
	Request shared.GetActiveNamesRequest `request:"mediaType=application/json"`
}

type GetActiveNamesResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetActiveNamesResult            *shared.GetActiveNamesResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
