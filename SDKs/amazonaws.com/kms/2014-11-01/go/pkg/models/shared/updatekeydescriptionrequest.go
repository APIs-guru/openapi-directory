package shared

type UpdateKeyDescriptionRequest struct {
	Description string `json:"Description"`
	KeyID       string `json:"KeyId"`
}
