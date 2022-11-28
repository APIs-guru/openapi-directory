package shared

// Administrator
// This represents an enterprise admin who can manage the enterprise in the managed Google Play store.
type Administrator struct {
	Email *string `json:"email,omitempty"`
}
