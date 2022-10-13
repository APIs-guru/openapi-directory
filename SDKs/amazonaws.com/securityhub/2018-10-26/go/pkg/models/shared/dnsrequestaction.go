package shared

type DNSRequestAction struct {
	Blocked  *bool   `json:"Blocked"`
	Domain   *string `json:"Domain"`
	Protocol *string `json:"Protocol"`
}
