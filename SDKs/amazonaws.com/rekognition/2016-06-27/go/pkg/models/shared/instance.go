package shared

// Instance
// An instance of a label returned by Amazon Rekognition Image (<a>DetectLabels</a>) or by Amazon Rekognition Video (<a>GetLabelDetection</a>).
type Instance struct {
	BoundingBox *BoundingBox `json:"BoundingBox,omitempty"`
	Confidence  *float32     `json:"Confidence,omitempty"`
}
