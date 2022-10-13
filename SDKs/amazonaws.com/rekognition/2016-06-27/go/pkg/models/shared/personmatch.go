package shared

type PersonMatch struct {
	FaceMatches []FaceMatch   `json:"FaceMatches"`
	Person      *PersonDetail `json:"Person"`
	Timestamp   *int64        `json:"Timestamp"`
}
