package shared

type IPAlias struct {
	IP        *string `json:"IP"`
	Interface *string `json:"interface"`
	Mask      *string `json:"mask"`
	Port      *int32  `json:"port"`
}
