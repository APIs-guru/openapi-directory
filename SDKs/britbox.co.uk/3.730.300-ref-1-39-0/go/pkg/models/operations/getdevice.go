package operations

import (
	"openapi/pkg/models/shared"
)

type GetDevicePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetDeviceQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type GetDeviceSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type GetDeviceRequest struct {
	PathParams  GetDevicePathParams
	QueryParams GetDeviceQueryParams
	Security    GetDeviceSecurity
}

type GetDeviceResponse struct {
	ContentType  string
	Device       *shared.Device
	ServiceError *shared.ServiceError
	StatusCode   int64
}
