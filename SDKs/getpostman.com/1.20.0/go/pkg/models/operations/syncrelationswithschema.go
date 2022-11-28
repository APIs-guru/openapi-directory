package operations

type SyncRelationsWithSchemaPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
	EntityID     string `pathParam:"style=simple,explode=false,name=entityId"`
	EntityType   string `pathParam:"style=simple,explode=false,name=entityType"`
}

type SyncRelationsWithSchema200ApplicationJSON struct {
	Success *bool `json:"success,omitempty"`
}

type SyncRelationsWithSchema400ApplicationJSONError struct {
	Message *string `json:"message,omitempty"`
	Name    *string `json:"name,omitempty"`
}

type SyncRelationsWithSchema400ApplicationJSON struct {
	Error *SyncRelationsWithSchema400ApplicationJSONError `json:"error,omitempty"`
}

type SyncRelationsWithSchemaRequest struct {
	PathParams SyncRelationsWithSchemaPathParams
}

type SyncRelationsWithSchemaResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	SyncRelationsWithSchema200ApplicationJSONObject *SyncRelationsWithSchema200ApplicationJSON
	SyncRelationsWithSchema400ApplicationJSONObject *SyncRelationsWithSchema400ApplicationJSON
}
