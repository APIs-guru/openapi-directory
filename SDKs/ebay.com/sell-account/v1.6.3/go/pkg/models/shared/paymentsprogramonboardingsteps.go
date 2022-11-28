package shared

// PaymentsProgramOnboardingSteps
// The payments program onboarding steps, status, and link.
type PaymentsProgramOnboardingSteps struct {
	Name   *string `json:"name,omitempty"`
	Status *string `json:"status,omitempty"`
	WebURL *string `json:"webUrl,omitempty"`
}
