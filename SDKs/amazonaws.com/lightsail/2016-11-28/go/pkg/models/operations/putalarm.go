package operations

import (
	"openapi/pkg/models/shared"
)

type PutAlarmXAmzTargetEnum string

const (
	PutAlarmXAmzTargetEnumLightsail20161128PutAlarm PutAlarmXAmzTargetEnum = "Lightsail_20161128.PutAlarm"
)

type PutAlarmHeaders struct {
	XAmzAlgorithm     *string                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutAlarmXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutAlarmRequest struct {
	Headers PutAlarmHeaders
	Request shared.PutAlarmRequest `request:"mediaType=application/json"`
}

type PutAlarmResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InvalidInputException     *interface{}
	NotFoundException         *interface{}
	OperationFailureException *interface{}
	PutAlarmResult            *shared.PutAlarmResult
	ServiceException          *interface{}
	StatusCode                int64
	UnauthenticatedException  *interface{}
}
