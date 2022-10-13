package shared

type ArimaFittingMetrics struct {
	Aic           *float64 `json:"aic"`
	LogLikelihood *float64 `json:"logLikelihood"`
	Variance      *float64 `json:"variance"`
}
