package shared

type DomainInfo struct {
	Arn         *string                `json:"arn"`
	Description *string                `json:"description"`
	Name        string                 `json:"name"`
	Status      RegistrationStatusEnum `json:"status"`
}
