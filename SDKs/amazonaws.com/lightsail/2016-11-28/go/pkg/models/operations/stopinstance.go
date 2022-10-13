package operations

import (
	"openapi/pkg/models/shared"
)

type StopInstanceXAmzTargetEnum string

const (
	StopInstanceXAmzTargetEnumLightsail20161128StopInstance StopInstanceXAmzTargetEnum = "Lightsail_20161128.StopInstance"
)

type StopInstanceHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopInstanceRequest struct {
	Headers StopInstanceHeaders
	Request shared.StopInstanceRequest `request:"mediaType=application/json"`
}

type StopInstanceResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	StopInstanceResult              *shared.StopInstanceResult
	UnauthenticatedException        *interface{}
}
