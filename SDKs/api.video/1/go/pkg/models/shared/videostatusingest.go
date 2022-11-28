package shared

type VideostatusIngestStatusEnum string

const (
	VideostatusIngestStatusEnumMissing   VideostatusIngestStatusEnum = "missing"
	VideostatusIngestStatusEnumUploading VideostatusIngestStatusEnum = "uploading"
	VideostatusIngestStatusEnumUploaded  VideostatusIngestStatusEnum = "uploaded"
)

// VideostatusIngest
// Details about the capturing, transferring, and storing of your video for use immediately or in the future.
type VideostatusIngest struct {
	Filesize      *int64                       `json:"filesize,omitempty"`
	ReceivedBytes []BytesRange                 `json:"receivedBytes,omitempty"`
	Status        *VideostatusIngestStatusEnum `json:"status,omitempty"`
}
