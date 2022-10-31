package shared

type EnumOption struct {
	Color        *string `json:"color,omitempty"`
	Enabled      *bool   `json:"enabled,omitempty"`
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}
