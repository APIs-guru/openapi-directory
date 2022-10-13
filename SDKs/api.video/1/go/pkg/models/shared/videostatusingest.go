package shared

type VideostatusIngestStatusEnum string

const (
	VideostatusIngestStatusEnumMissing   VideostatusIngestStatusEnum = "missing"
	VideostatusIngestStatusEnumUploading VideostatusIngestStatusEnum = "uploading"
	VideostatusIngestStatusEnumUploaded  VideostatusIngestStatusEnum = "uploaded"
)

type VideostatusIngest struct {
	Filesize      *int64                       `json:"filesize"`
	ReceivedBytes []BytesRange                 `json:"receivedBytes"`
	Status        *VideostatusIngestStatusEnum `json:"status"`
}
