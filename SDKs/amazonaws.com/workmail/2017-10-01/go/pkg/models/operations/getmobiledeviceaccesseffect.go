package operations

import (
	"openapi/pkg/models/shared"
)

type GetMobileDeviceAccessEffectXAmzTargetEnum string

const (
	GetMobileDeviceAccessEffectXAmzTargetEnumWorkMailServiceGetMobileDeviceAccessEffect GetMobileDeviceAccessEffectXAmzTargetEnum = "WorkMailService.GetMobileDeviceAccessEffect"
)

type GetMobileDeviceAccessEffectHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetMobileDeviceAccessEffectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetMobileDeviceAccessEffectRequest struct {
	Headers GetMobileDeviceAccessEffectHeaders
	Request shared.GetMobileDeviceAccessEffectRequest `request:"mediaType=application/json"`
}

type GetMobileDeviceAccessEffectResponse struct {
	ContentType                         string
	GetMobileDeviceAccessEffectResponse *shared.GetMobileDeviceAccessEffectResponse
	InvalidParameterException           *interface{}
	OrganizationNotFoundException       *interface{}
	OrganizationStateException          *interface{}
	StatusCode                          int64
}
