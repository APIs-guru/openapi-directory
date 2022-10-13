package shared

type Range struct {
	End         *int64 `json:"end"`
	Start       *int64 `json:"start"`
	StartColumn *int64 `json:"startColumn"`
}
