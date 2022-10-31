package shared

type APICoreDtoTopsTop struct {
	CreatedAt *string                 `json:"createdAt,omitempty"`
	Data      []APICoreDtoTopsTopItem `json:"data,omitempty"`
	Key       *string                 `json:"key,omitempty"`
}
