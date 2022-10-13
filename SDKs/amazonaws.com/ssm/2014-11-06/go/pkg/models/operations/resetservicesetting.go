package operations

import (
	"openapi/pkg/models/shared"
)

type ResetServiceSettingXAmzTargetEnum string

const (
	ResetServiceSettingXAmzTargetEnumAmazonSsmResetServiceSetting ResetServiceSettingXAmzTargetEnum = "AmazonSSM.ResetServiceSetting"
)

type ResetServiceSettingHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ResetServiceSettingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ResetServiceSettingRequest struct {
	Headers ResetServiceSettingHeaders
	Request shared.ResetServiceSettingRequest `request:"mediaType=application/json"`
}

type ResetServiceSettingResponse struct {
	ContentType               string
	InternalServerError       *interface{}
	ResetServiceSettingResult *shared.ResetServiceSettingResult
	ServiceSettingNotFound    *interface{}
	StatusCode                int64
	TooManyUpdates            *interface{}
}
