package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServiceSettingXAmzTargetEnum string

const (
	UpdateServiceSettingXAmzTargetEnumAmazonSsmUpdateServiceSetting UpdateServiceSettingXAmzTargetEnum = "AmazonSSM.UpdateServiceSetting"
)

type UpdateServiceSettingHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateServiceSettingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateServiceSettingRequest struct {
	Headers UpdateServiceSettingHeaders
	Request shared.UpdateServiceSettingRequest `request:"mediaType=application/json"`
}

type UpdateServiceSettingResponse struct {
	ContentType                string
	InternalServerError        *interface{}
	ServiceSettingNotFound     *interface{}
	StatusCode                 int64
	TooManyUpdates             *interface{}
	UpdateServiceSettingResult map[string]interface{}
}
