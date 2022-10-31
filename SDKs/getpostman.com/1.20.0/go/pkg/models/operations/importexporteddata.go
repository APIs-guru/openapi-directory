package operations

type ImportExportedDataRequest struct {
	Request []byte `request:"mediaType=application/octet-stream"`
}

type ImportExportedData200ApplicationJSONCollections struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	UID  *string `json:"uid,omitempty"`
}

type ImportExportedData200ApplicationJSON struct {
	Collections []ImportExportedData200ApplicationJSONCollections `json:"collections,omitempty"`
}

type ImportExportedData400ApplicationJSONErrorDetails struct {
	Param *string `json:"param,omitempty"`
}

type ImportExportedData400ApplicationJSONError struct {
	Details *ImportExportedData400ApplicationJSONErrorDetails `json:"details,omitempty"`
	Message *string                                           `json:"message,omitempty"`
	Name    *string                                           `json:"name,omitempty"`
}

type ImportExportedData400ApplicationJSON struct {
	Error *ImportExportedData400ApplicationJSONError `json:"error,omitempty"`
}

type ImportExportedDataResponse struct {
	ContentType                                string
	StatusCode                                 int64
	ImportExportedData200ApplicationJSONObject *ImportExportedData200ApplicationJSON
	ImportExportedData400ApplicationJSONObject *ImportExportedData400ApplicationJSON
}
