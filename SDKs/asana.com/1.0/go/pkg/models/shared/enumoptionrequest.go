package shared

type EnumOptionRequestInput struct {
	Color        *string `json:"color,omitempty"`
	Enabled      *bool   `json:"enabled,omitempty"`
	InsertAfter  *string `json:"insert_after,omitempty"`
	InsertBefore *string `json:"insert_before,omitempty"`
	Name         *string `json:"name,omitempty"`
}
