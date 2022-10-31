package shared

type UpdateServiceRequest struct {
	ID      string        `json:"Id"`
	Service ServiceChange `json:"Service"`
}
