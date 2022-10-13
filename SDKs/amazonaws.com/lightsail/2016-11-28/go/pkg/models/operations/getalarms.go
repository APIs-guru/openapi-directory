package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlarmsXAmzTargetEnum string

const (
	GetAlarmsXAmzTargetEnumLightsail20161128GetAlarms GetAlarmsXAmzTargetEnum = "Lightsail_20161128.GetAlarms"
)

type GetAlarmsHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAlarmsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAlarmsRequest struct {
	Headers GetAlarmsHeaders
	Request shared.GetAlarmsRequest `request:"mediaType=application/json"`
}

type GetAlarmsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetAlarmsResult           *shared.GetAlarmsResult
	InvalidInputException     *interface{}
	NotFoundException         *interface{}
	OperationFailureException *interface{}
	ServiceException          *interface{}
	StatusCode                int64
	UnauthenticatedException  *interface{}
}
