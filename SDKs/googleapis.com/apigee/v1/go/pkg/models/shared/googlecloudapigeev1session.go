package shared

// GoogleCloudApigeeV1Session
// Session carries the debug session id and its creation time.
type GoogleCloudApigeeV1Session struct {
	ID          *string `json:"id,omitempty"`
	TimestampMs *string `json:"timestampMs,omitempty"`
}
