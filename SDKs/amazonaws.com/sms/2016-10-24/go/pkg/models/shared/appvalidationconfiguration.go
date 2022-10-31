package shared

type AppValidationConfiguration struct {
	AppValidationStrategy   *AppValidationStrategyEnum `json:"appValidationStrategy,omitempty"`
	Name                    *string                    `json:"name,omitempty"`
	SsmValidationParameters *SsmValidationParameters   `json:"ssmValidationParameters,omitempty"`
	ValidationID            *string                    `json:"validationId,omitempty"`
}
