package shared



type EnumOptionRequest struct {
    Color *string `json:"color,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    Gid *string `json:"gid,omitempty"`
    InsertAfter *string `json:"insert_after,omitempty"`
    InsertBefore *string `json:"insert_before,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
}

