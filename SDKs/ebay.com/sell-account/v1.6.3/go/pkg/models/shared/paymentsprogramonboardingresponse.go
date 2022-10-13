package shared

type PaymentsProgramOnboardingResponse struct {
	OnboardingStatus *string                          `json:"onboardingStatus"`
	Steps            []PaymentsProgramOnboardingSteps `json:"steps"`
}
