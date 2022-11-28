package shared

// LabelingJobS3DataSource
// The Amazon S3 location of the input data objects.
type LabelingJobS3DataSource struct {
	ManifestS3URI string `json:"ManifestS3Uri"`
}
