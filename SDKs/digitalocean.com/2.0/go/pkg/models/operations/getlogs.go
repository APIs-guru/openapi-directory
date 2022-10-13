package operations

import (
	"openapi/pkg/models/shared"
)

type GetLogsPathParams struct {
	AppID         string `pathParam:"style=simple,explode=false,name=app_id"`
	ComponentName string `pathParam:"style=simple,explode=false,name=component_name"`
	DeploymentID  string `pathParam:"style=simple,explode=false,name=deployment_id"`
}

type GetLogsTypeEnum string

const (
	GetLogsTypeEnumUnspecified GetLogsTypeEnum = "UNSPECIFIED"
	GetLogsTypeEnumBuild       GetLogsTypeEnum = "BUILD"
	GetLogsTypeEnumDeploy      GetLogsTypeEnum = "DEPLOY"
	GetLogsTypeEnumRun         GetLogsTypeEnum = "RUN"
)

type GetLogsQueryParams struct {
	Follow               *bool           `queryParam:"style=form,explode=true,name=follow"`
	PodConnectionTimeout *string         `queryParam:"style=form,explode=true,name=pod_connection_timeout"`
	Type                 GetLogsTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetLogsRequest struct {
	PathParams  GetLogsPathParams
	QueryParams GetLogsQueryParams
}

type GetLogs200ApplicationJSON struct {
	HistoricUrls []string `json:"historic_urls"`
	LiveURL      *string  `json:"live_url"`
}

type GetLogs401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetLogsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetLogs200ApplicationJSONObject                           *GetLogs200ApplicationJSON
	GetLogs401ApplicationJSONObject                           *GetLogs401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
