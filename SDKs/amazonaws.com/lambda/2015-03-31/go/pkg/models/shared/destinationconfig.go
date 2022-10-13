package shared

type DestinationConfig struct {
	OnFailure *OnFailure `json:"OnFailure"`
	OnSuccess *OnSuccess `json:"OnSuccess"`
}
