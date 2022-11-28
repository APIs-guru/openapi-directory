package shared

// PaymentsProgramOnboardingResponse
// Contains the payments program onboarding response
type PaymentsProgramOnboardingResponse struct {
	OnboardingStatus *string                          `json:"onboardingStatus,omitempty"`
	Steps            []PaymentsProgramOnboardingSteps `json:"steps,omitempty"`
}
