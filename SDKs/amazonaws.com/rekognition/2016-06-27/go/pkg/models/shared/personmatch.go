package shared

// PersonMatch
// Information about a person whose face matches a face(s) in an Amazon Rekognition collection. Includes information about the faces in the Amazon Rekognition collection (<a>FaceMatch</a>), information about the person (<a>PersonDetail</a>), and the time stamp for when the person was detected in a video. An array of <code>PersonMatch</code> objects is returned by <a>GetFaceSearch</a>.
type PersonMatch struct {
	FaceMatches []FaceMatch   `json:"FaceMatches,omitempty"`
	Person      *PersonDetail `json:"Person,omitempty"`
	Timestamp   *int64        `json:"Timestamp,omitempty"`
}
