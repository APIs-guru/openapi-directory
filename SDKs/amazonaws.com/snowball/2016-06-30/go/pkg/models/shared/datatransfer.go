package shared

// DataTransfer
// Defines the real-time status of a Snow device's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs.
type DataTransfer struct {
	BytesTransferred   *int64 `json:"BytesTransferred,omitempty"`
	ObjectsTransferred *int64 `json:"ObjectsTransferred,omitempty"`
	TotalBytes         *int64 `json:"TotalBytes,omitempty"`
	TotalObjects       *int64 `json:"TotalObjects,omitempty"`
}
