package shared

type IPAlias struct {
	IP        *string `json:"IP,omitempty"`
	Interface *string `json:"interface,omitempty"`
	Mask      *string `json:"mask,omitempty"`
	Port      *int32  `json:"port,omitempty"`
}
