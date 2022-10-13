package shared

type AppValidationConfiguration struct {
	AppValidationStrategy   *AppValidationStrategyEnum `json:"appValidationStrategy"`
	Name                    *string                    `json:"name"`
	SsmValidationParameters *SsmValidationParameters   `json:"ssmValidationParameters"`
	ValidationID            *string                    `json:"validationId"`
}
