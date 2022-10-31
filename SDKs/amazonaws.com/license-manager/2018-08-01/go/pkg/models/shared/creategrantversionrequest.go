package shared

type CreateGrantVersionRequest struct {
	AllowedOperations []AllowedOperationEnum `json:"AllowedOperations,omitempty"`
	ClientToken       string                 `json:"ClientToken"`
	GrantArn          string                 `json:"GrantArn"`
	GrantName         *string                `json:"GrantName,omitempty"`
	SourceVersion     *string                `json:"SourceVersion,omitempty"`
	Status            *GrantStatusEnum       `json:"Status,omitempty"`
	StatusReason      *string                `json:"StatusReason,omitempty"`
}
