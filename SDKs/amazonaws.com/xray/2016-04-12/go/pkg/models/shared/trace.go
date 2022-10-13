package shared

type Trace struct {
	Duration      *float64  `json:"Duration"`
	ID            *string   `json:"Id"`
	LimitExceeded *bool     `json:"LimitExceeded"`
	Segments      []Segment `json:"Segments"`
}
