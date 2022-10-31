package shared



type UpdateCustomKeyStoreRequest struct {
    CloudHsmClusterID *string `json:"CloudHsmClusterId,omitempty"`
    CustomKeyStoreID string `json:"CustomKeyStoreId"`
    KeyStorePassword *string `json:"KeyStorePassword,omitempty"`
    NewCustomKeyStoreName *string `json:"NewCustomKeyStoreName,omitempty"`
    
}

