package shared

type DataTransfer struct {
	BytesTransferred   *int64 `json:"BytesTransferred,omitempty"`
	ObjectsTransferred *int64 `json:"ObjectsTransferred,omitempty"`
	TotalBytes         *int64 `json:"TotalBytes,omitempty"`
	TotalObjects       *int64 `json:"TotalObjects,omitempty"`
}
