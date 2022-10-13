package shared

type PaymentDisputeActivity struct {
	ActivityDate *string `json:"activityDate"`
	ActivityType *string `json:"activityType"`
	Actor        *string `json:"actor"`
}
