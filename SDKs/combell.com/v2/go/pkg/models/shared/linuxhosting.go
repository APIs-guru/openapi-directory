package shared

type LinuxHosting struct {
	DomainName    *string `json:"domain_name,omitempty"`
	ServicepackID *int32  `json:"servicepack_id,omitempty"`
}
