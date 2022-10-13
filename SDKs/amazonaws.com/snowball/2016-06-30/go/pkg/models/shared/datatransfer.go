package shared

type DataTransfer struct {
	BytesTransferred   *int64 `json:"BytesTransferred"`
	ObjectsTransferred *int64 `json:"ObjectsTransferred"`
	TotalBytes         *int64 `json:"TotalBytes"`
	TotalObjects       *int64 `json:"TotalObjects"`
}
