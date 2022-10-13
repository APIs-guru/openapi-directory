package shared

type LiveStreamUpdatePayload struct {
	Name     *string `json:"name"`
	PlayerID *string `json:"playerId"`
	Public   *bool   `json:"public"`
	Record   *bool   `json:"record"`
}
