package shared

type EnumOptionRequest struct {
	Color        *string `json:"color"`
	Enabled      *bool   `json:"enabled"`
	Gid          *string `json:"gid"`
	InsertAfter  *string `json:"insert_after"`
	InsertBefore *string `json:"insert_before"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}
