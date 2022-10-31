package shared

type DeleteDomainRequest struct {
	DomainID        string           `json:"DomainId"`
	RetentionPolicy *RetentionPolicy `json:"RetentionPolicy,omitempty"`
}
