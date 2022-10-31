package shared

type WindowsHosting struct {
	DomainName    *string `json:"domain_name,omitempty"`
	ServicepackID *int32  `json:"servicepack_id,omitempty"`
}
