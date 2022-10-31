package shared



type CreateCollectionRequest struct {
    CollectionID string `json:"CollectionId"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

