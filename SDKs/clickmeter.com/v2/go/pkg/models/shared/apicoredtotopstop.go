package shared

type APICoreDtoTopsTop struct {
	CreatedAt *string                 `json:"createdAt"`
	Data      []APICoreDtoTopsTopItem `json:"data"`
	Key       *string                 `json:"key"`
}
