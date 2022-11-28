package shared

// TextDetection
// <p>Information about a word or line of text detected by <a>DetectText</a>.</p> <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the image. </p> <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which the word appears. The word <code>Id</code> is also an index for the word within a line of words. </p> <p>For more information, see Detecting Text in the Amazon Rekognition Developer Guide.</p>
type TextDetection struct {
	Confidence   *float32       `json:"Confidence,omitempty"`
	DetectedText *string        `json:"DetectedText,omitempty"`
	Geometry     *Geometry      `json:"Geometry,omitempty"`
	ID           *int64         `json:"Id,omitempty"`
	ParentID     *int64         `json:"ParentId,omitempty"`
	Type         *TextTypesEnum `json:"Type,omitempty"`
}
