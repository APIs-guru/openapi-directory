package operations

import (
	"openapi/pkg/models/shared"
)

type GetMobileDeviceAccessEffectXAmzTargetEnum string

const (
	GetMobileDeviceAccessEffectXAmzTargetEnumWorkMailServiceGetMobileDeviceAccessEffect GetMobileDeviceAccessEffectXAmzTargetEnum = "WorkMailService.GetMobileDeviceAccessEffect"
)

type GetMobileDeviceAccessEffectHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetMobileDeviceAccessEffectXAmzTargetEnum `header:"name=X-Amz-Target"`
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
