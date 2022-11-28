package shared

// TimeDuration
// A complex type that specifies a period of time using a specified time-measurement unit.
type TimeDuration struct {
	Unit  *string `json:"unit,omitempty"`
	Value *int32  `json:"value,omitempty"`
}
