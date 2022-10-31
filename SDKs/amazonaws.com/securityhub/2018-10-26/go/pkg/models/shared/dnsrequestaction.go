package shared

type DNSRequestAction struct {
	Blocked  *bool   `json:"Blocked,omitempty"`
	Domain   *string `json:"Domain,omitempty"`
	Protocol *string `json:"Protocol,omitempty"`
}
