package shared

type PersonDetection struct {
	Person    *PersonDetail `json:"Person"`
	Timestamp *int64        `json:"Timestamp"`
}
