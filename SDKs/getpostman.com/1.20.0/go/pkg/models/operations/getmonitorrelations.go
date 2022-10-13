package operations

type GetMonitorRelationsPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type GetMonitorRelationsRequest struct {
	PathParams GetMonitorRelationsPathParams
}

type GetMonitorRelations200ApplicationJSONMonitor struct {
	ID        *string `json:"id"`
	MonitorID *string `json:"monitorId"`
	Name      *string `json:"name"`
	UpdatedAt *string `json:"updatedAt"`
}

type GetMonitorRelations200ApplicationJSON struct {
	Monitor []GetMonitorRelations200ApplicationJSONMonitor `json:"monitor"`
}

type GetMonitorRelationsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetMonitorRelations200ApplicationJSONObject *GetMonitorRelations200ApplicationJSON
}
