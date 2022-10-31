package shared



type CollectionConfiguration struct {
    CollectionName *string `json:"CollectionName,omitempty"`
    CollectionParameters map[string]string `json:"CollectionParameters,omitempty"`
    
}

