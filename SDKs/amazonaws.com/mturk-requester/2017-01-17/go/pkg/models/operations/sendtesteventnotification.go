package operations

import (
	"openapi/pkg/models/shared"
)

type SendTestEventNotificationXAmzTargetEnum string

const (
	SendTestEventNotificationXAmzTargetEnumMTurkRequesterServiceV20170117SendTestEventNotification SendTestEventNotificationXAmzTargetEnum = "MTurkRequesterServiceV20170117.SendTestEventNotification"
)

type SendTestEventNotificationHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SendTestEventNotificationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type SendTestEventNotificationRequest struct {
	Headers SendTestEventNotificationHeaders
	Request shared.SendTestEventNotificationRequest `request:"mediaType=application/json"`
}

type SendTestEventNotificationResponse struct {
	ContentType                       string
	RequestError                      *interface{}
	SendTestEventNotificationResponse map[string]interface{}
	ServiceFault                      *interface{}
	StatusCode                        int64
}
