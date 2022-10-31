package shared



type UpdateResourceShareResponse struct {
    ClientToken *string `json:"clientToken,omitempty"`
    ResourceShare *ResourceShare `json:"resourceShare,omitempty"`
    
}

