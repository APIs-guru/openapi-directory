package shared

type Range struct {
	End         *int64 `json:"End"`
	Start       *int64 `json:"Start"`
	StartColumn *int64 `json:"StartColumn"`
}
