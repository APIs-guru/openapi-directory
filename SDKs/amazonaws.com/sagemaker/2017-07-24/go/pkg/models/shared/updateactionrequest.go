package shared

type UpdateActionRequest struct {
	ActionName         string            `json:"ActionName"`
	Description        *string           `json:"Description"`
	Properties         map[string]string `json:"Properties"`
	PropertiesToRemove []string          `json:"PropertiesToRemove"`
	Status             *ActionStatusEnum `json:"Status"`
}
