package operations

import (
	"openapi/pkg/models/shared"
)

type GetServiceSettingXAmzTargetEnum string

const (
	GetServiceSettingXAmzTargetEnumAmazonSsmGetServiceSetting GetServiceSettingXAmzTargetEnum = "AmazonSSM.GetServiceSetting"
)

type GetServiceSettingHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetServiceSettingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetServiceSettingRequest struct {
	Headers GetServiceSettingHeaders
	Request shared.GetServiceSettingRequest `request:"mediaType=application/json"`
}

type GetServiceSettingResponse struct {
	ContentType             string
	GetServiceSettingResult *shared.GetServiceSettingResult
	InternalServerError     *interface{}
	ServiceSettingNotFound  *interface{}
	StatusCode              int64
}
