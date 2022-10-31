package shared



type GetEntitiesRequest struct {
    Ids []string `json:"ids"`
    NamespaceVersion *int64 `json:"namespaceVersion,omitempty"`
    
}

