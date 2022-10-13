package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateNotificationSettingsXAmzTargetEnum string

const (
	UpdateNotificationSettingsXAmzTargetEnumMTurkRequesterServiceV20170117UpdateNotificationSettings UpdateNotificationSettingsXAmzTargetEnum = "MTurkRequesterServiceV20170117.UpdateNotificationSettings"
)

type UpdateNotificationSettingsHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateNotificationSettingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateNotificationSettingsRequest struct {
	Headers UpdateNotificationSettingsHeaders
	Request shared.UpdateNotificationSettingsRequest `request:"mediaType=application/json"`
}

type UpdateNotificationSettingsResponse struct {
	ContentType                        string
	RequestError                       *interface{}
	ServiceFault                       *interface{}
	StatusCode                         int64
	UpdateNotificationSettingsResponse map[string]interface{}
}
