package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSettingValuePathParams struct {
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
	SettingID     int32  `pathParam:"style=simple,explode=false,name=settingId"`
}

type UpdateSettingValueQueryParams struct {
	Reason *string `queryParam:"style=form,explode=true,name=reason"`
}

type UpdateSettingValueRequests struct {
	Operations  []shared.Operation `request:"mediaType=application/*+json"`
	Operations1 []shared.Operation `request:"mediaType=application/json"`
	Operations2 []shared.Operation `request:"mediaType=application/json-patch+json"`
	Operations3 []shared.Operation `request:"mediaType=text/json"`
}

type UpdateSettingValueRequest struct {
	PathParams  UpdateSettingValuePathParams
	QueryParams UpdateSettingValueQueryParams
	Request     UpdateSettingValueRequests
}

type UpdateSettingValueResponse struct {
	ContentType              string
	SettingValueModel        *shared.SettingValueModel
	SettingValueModelHaljson *shared.SettingValueModelHaljson
	StatusCode               int64
}
