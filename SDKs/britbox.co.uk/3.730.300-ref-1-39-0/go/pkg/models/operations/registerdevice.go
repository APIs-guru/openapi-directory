package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterDeviceQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type RegisterDeviceSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type RegisterDeviceRequest struct {
	QueryParams RegisterDeviceQueryParams
	Request     shared.DeviceRegistrationRequest `request:"mediaType=application/json"`
	Security    RegisterDeviceSecurity
}

type RegisterDeviceResponse struct {
	ContentType  string
	Device       *shared.Device
	ServiceError *shared.ServiceError
	StatusCode   int64
}
