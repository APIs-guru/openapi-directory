package shared

type HighShelf struct {
	Frequency int32   `json:"frequency"`
	GainDb    int32   `json:"gain_db"`
	Quality   float64 `json:"quality"`
}
