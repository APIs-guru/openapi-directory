package shared

type ArimaFittingMetrics struct {
	Aic           *float64 `json:"aic,omitempty"`
	LogLikelihood *float64 `json:"logLikelihood,omitempty"`
	Variance      *float64 `json:"variance,omitempty"`
}
