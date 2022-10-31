package operations

import (
	"openapi/pkg/models/shared"
)

type GenerateDeviceAuthorizationCodeQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type GenerateDeviceAuthorizationCodeRequest struct {
	QueryParams GenerateDeviceAuthorizationCodeQueryParams
	Request     shared.DeviceRegistrationRequest `request:"mediaType=application/json"`
}

type GenerateDeviceAuthorizationCodeResponse struct {
	ContentType             string
	DeviceAuthorizationCode *shared.DeviceAuthorizationCode
	ServiceError            *shared.ServiceError
	StatusCode              int64
}
