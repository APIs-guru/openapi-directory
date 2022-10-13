package shared

type CreatePolicyRequest struct {
	Content     string         `json:"Content"`
	Description string         `json:"Description"`
	Name        string         `json:"Name"`
	Tags        []Tag          `json:"Tags"`
	Type        PolicyTypeEnum `json:"Type"`
}
