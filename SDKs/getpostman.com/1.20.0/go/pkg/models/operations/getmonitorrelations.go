package operations

type GetMonitorRelationsPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type GetMonitorRelationsRequest struct {
	PathParams GetMonitorRelationsPathParams
}

type GetMonitorRelations200ApplicationJSONMonitor struct {
	ID        *string `json:"id,omitempty"`
	MonitorID *string `json:"monitorId,omitempty"`
	Name      *string `json:"name,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

type GetMonitorRelations200ApplicationJSON struct {
	Monitor []GetMonitorRelations200ApplicationJSONMonitor `json:"monitor,omitempty"`
}

type GetMonitorRelationsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetMonitorRelations200ApplicationJSONObject *GetMonitorRelations200ApplicationJSON
}
