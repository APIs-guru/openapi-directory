package shared

type Timestamp struct {
	Nanos   *int32  `json:"nanos"`
	Seconds *string `json:"seconds"`
}
