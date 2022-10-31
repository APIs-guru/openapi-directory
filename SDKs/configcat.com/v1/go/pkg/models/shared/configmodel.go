package shared



type ConfigModel struct {
    ConfigID *string `json:"configId,omitempty"`
    Name *string `json:"name,omitempty"`
    Product *ProductModel `json:"product,omitempty"`
    
}

