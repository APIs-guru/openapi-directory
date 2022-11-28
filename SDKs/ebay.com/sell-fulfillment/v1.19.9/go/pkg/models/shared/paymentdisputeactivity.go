package shared

// PaymentDisputeActivity
// This type is used by each recorded activity on a payment dispute, from creation to resolution.
type PaymentDisputeActivity struct {
	ActivityDate *string `json:"activityDate,omitempty"`
	ActivityType *string `json:"activityType,omitempty"`
	Actor        *string `json:"actor,omitempty"`
}
