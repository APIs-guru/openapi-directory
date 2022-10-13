package shared

type OpsEntity struct {
	Data map[string]OpsEntityItem `json:"Data"`
	ID   *string                  `json:"Id"`
}
