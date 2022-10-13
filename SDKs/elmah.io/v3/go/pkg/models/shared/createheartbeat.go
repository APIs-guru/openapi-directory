package shared

type CreateHeartbeat struct {
	Application *string `json:"application"`
	Reason      *string `json:"reason"`
	Result      *string `json:"result"`
	Took        *int64  `json:"took"`
	Version     *string `json:"version"`
}
