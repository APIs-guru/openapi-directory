package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstanceAccessDetailsXAmzTargetEnum string

const (
	GetInstanceAccessDetailsXAmzTargetEnumLightsail20161128GetInstanceAccessDetails GetInstanceAccessDetailsXAmzTargetEnum = "Lightsail_20161128.GetInstanceAccessDetails"
)

type GetInstanceAccessDetailsHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInstanceAccessDetailsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetInstanceAccessDetailsRequest struct {
	Headers GetInstanceAccessDetailsHeaders
	Request shared.GetInstanceAccessDetailsRequest `request:"mediaType=application/json"`
}

type GetInstanceAccessDetailsResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetInstanceAccessDetailsResult  *shared.GetInstanceAccessDetailsResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
