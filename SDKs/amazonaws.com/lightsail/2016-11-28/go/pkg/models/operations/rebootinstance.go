package operations

import (
	"openapi/pkg/models/shared"
)

type RebootInstanceXAmzTargetEnum string

const (
	RebootInstanceXAmzTargetEnumLightsail20161128RebootInstance RebootInstanceXAmzTargetEnum = "Lightsail_20161128.RebootInstance"
)

type RebootInstanceHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RebootInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RebootInstanceRequest struct {
	Headers RebootInstanceHeaders
	Request shared.RebootInstanceRequest `request:"mediaType=application/json"`
}

type RebootInstanceResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	RebootInstanceResult            *shared.RebootInstanceResult
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
