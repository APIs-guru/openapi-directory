package shared

// Video
// Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
type Video struct {
	S3Object *S3Object `json:"S3Object,omitempty"`
}
