package shared

// GoogleCloudApigeeV1KeyValueEntry
// Key value map pair where the value represents the data associated with the corresponding key. **Note**: Supported for Apigee hybrid 1.8.x and higher.
type GoogleCloudApigeeV1KeyValueEntry struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
