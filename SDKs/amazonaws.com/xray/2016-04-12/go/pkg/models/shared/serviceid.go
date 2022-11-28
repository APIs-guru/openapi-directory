package shared

// ServiceID
// <p/>
type ServiceID struct {
	AccountID *string  `json:"AccountId,omitempty"`
	Name      *string  `json:"Name,omitempty"`
	Names     []string `json:"Names,omitempty"`
	Type      *string  `json:"Type,omitempty"`
}
