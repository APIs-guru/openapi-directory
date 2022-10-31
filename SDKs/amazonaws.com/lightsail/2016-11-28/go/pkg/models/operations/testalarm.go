package operations

import (
	"openapi/pkg/models/shared"
)

type TestAlarmXAmzTargetEnum string

const (
	TestAlarmXAmzTargetEnumLightsail20161128TestAlarm TestAlarmXAmzTargetEnum = "Lightsail_20161128.TestAlarm"
)

type TestAlarmHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        TestAlarmXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type TestAlarmRequest struct {
	Headers TestAlarmHeaders
	Request shared.TestAlarmRequest `request:"mediaType=application/json"`
}

type TestAlarmResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InvalidInputException     *interface{}
	NotFoundException         *interface{}
	OperationFailureException *interface{}
	ServiceException          *interface{}
	StatusCode                int64
	TestAlarmResult           *shared.TestAlarmResult
	UnauthenticatedException  *interface{}
}
