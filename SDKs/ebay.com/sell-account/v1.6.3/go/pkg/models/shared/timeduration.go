package shared

type TimeDuration struct {
	Unit  *string `json:"unit"`
	Value *int32  `json:"value"`
}
