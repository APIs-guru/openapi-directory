package operations

import (
	"openapi/pkg/models/shared"
)

type RenameDevicePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RenameDeviceQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
	Name string                    `queryParam:"style=form,explode=true,name=name"`
}

type RenameDeviceSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type RenameDeviceRequest struct {
	PathParams  RenameDevicePathParams
	QueryParams RenameDeviceQueryParams
	Security    RenameDeviceSecurity
}

type RenameDeviceResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
