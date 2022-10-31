package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServiceSettingXAmzTargetEnum string

const (
	UpdateServiceSettingXAmzTargetEnumAmazonSsmUpdateServiceSetting UpdateServiceSettingXAmzTargetEnum = "AmazonSSM.UpdateServiceSetting"
)

type UpdateServiceSettingHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateServiceSettingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
