package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlarmsXAmzTargetEnum string

const (
	GetAlarmsXAmzTargetEnumLightsail20161128GetAlarms GetAlarmsXAmzTargetEnum = "Lightsail_20161128.GetAlarms"
)

type GetAlarmsHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAlarmsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
