package operations

import (
	"openapi/pkg/models/shared"
)

type UsersGetLogsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UsersGetLogsSecurity struct {
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type UsersGetLogsRequest struct {
	PathParams UsersGetLogsPathParams
	Security   UsersGetLogsSecurity
}

type UsersGetLogsResponse struct {
	ContentType string
	StatusCode  int64
	LogList     *shared.LogList
}
