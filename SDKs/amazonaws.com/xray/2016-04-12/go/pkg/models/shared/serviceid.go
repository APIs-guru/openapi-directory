package shared

type ServiceID struct {
	AccountID *string  `json:"AccountId"`
	Name      *string  `json:"Name"`
	Names     []string `json:"Names"`
	Type      *string  `json:"Type"`
}
