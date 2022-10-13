package shared

type RecordActivityTaskHeartbeatInput struct {
	Details   *string `json:"details"`
	TaskToken string  `json:"taskToken"`
}
