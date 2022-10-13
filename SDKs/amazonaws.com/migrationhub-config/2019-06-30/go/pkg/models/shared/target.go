package shared

type Target struct {
	ID   *string        `json:"Id"`
	Type TargetTypeEnum `json:"Type"`
}
