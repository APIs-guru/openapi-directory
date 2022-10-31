package shared



type PaymentsProgramOnboardingResponse struct {
    OnboardingStatus *string `json:"onboardingStatus,omitempty"`
    Steps []PaymentsProgramOnboardingSteps `json:"steps,omitempty"`
    
}

