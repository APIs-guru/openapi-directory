package shared

// ArimaOrder
// Arima order, can be used for both non-seasonal and seasonal parts.
type ArimaOrder struct {
	D *string `json:"d,omitempty"`
	P *string `json:"p,omitempty"`
	Q *string `json:"q,omitempty"`
}
