package shared

type S3FileLocation struct {
	Bucket    *string `json:"Bucket"`
	Etag      *string `json:"Etag"`
	Key       *string `json:"Key"`
	VersionID *string `json:"VersionId"`
}
