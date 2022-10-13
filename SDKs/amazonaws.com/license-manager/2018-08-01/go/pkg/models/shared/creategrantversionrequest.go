package shared

type CreateGrantVersionRequest struct {
	AllowedOperations []AllowedOperationEnum `json:"AllowedOperations"`
	ClientToken       string                 `json:"ClientToken"`
	GrantArn          string                 `json:"GrantArn"`
	GrantName         *string                `json:"GrantName"`
	SourceVersion     *string                `json:"SourceVersion"`
	Status            *GrantStatusEnum       `json:"Status"`
	StatusReason      *string                `json:"StatusReason"`
}
