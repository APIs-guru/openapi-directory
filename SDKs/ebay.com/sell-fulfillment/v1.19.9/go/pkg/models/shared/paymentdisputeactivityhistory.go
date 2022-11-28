package shared

// PaymentDisputeActivityHistory
// This type is used by the base response of the getActivities method, and includes a log of all activities of a payment dispute, from creation to resolution.
type PaymentDisputeActivityHistory struct {
	Activity []PaymentDisputeActivity `json:"activity,omitempty"`
}
