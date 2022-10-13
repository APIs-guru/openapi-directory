package shared

type EnumOption struct {
	Color        *string `json:"color"`
	Enabled      *bool   `json:"enabled"`
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}
