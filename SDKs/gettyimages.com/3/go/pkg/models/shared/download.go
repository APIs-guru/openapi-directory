package shared



type Download struct {
    AgreementName *string `json:"agreement_name,omitempty"`
    ProductID *string `json:"product_id,omitempty"`
    ProductType *string `json:"product_type,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

