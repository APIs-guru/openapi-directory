package shared

// FaceDetail
// <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p>
type FaceDetail struct {
	AgeRange    *AgeRange     `json:"AgeRange,omitempty"`
	Beard       *Beard        `json:"Beard,omitempty"`
	BoundingBox *BoundingBox  `json:"BoundingBox,omitempty"`
	Confidence  *float32      `json:"Confidence,omitempty"`
	Emotions    []Emotion     `json:"Emotions,omitempty"`
	Eyeglasses  *Eyeglasses   `json:"Eyeglasses,omitempty"`
	EyesOpen    *EyeOpen      `json:"EyesOpen,omitempty"`
	Gender      *Gender       `json:"Gender,omitempty"`
	Landmarks   []Landmark    `json:"Landmarks,omitempty"`
	MouthOpen   *MouthOpen    `json:"MouthOpen,omitempty"`
	Mustache    *Mustache     `json:"Mustache,omitempty"`
	Pose        *Pose         `json:"Pose,omitempty"`
	Quality     *ImageQuality `json:"Quality,omitempty"`
	Smile       *Smile        `json:"Smile,omitempty"`
	Sunglasses  *Sunglasses   `json:"Sunglasses,omitempty"`
}
