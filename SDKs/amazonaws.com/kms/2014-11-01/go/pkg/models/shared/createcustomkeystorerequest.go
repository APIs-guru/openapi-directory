package shared



type CreateCustomKeyStoreRequest struct {
    CloudHsmClusterID string `json:"CloudHsmClusterId"`
    CustomKeyStoreName string `json:"CustomKeyStoreName"`
    KeyStorePassword string `json:"KeyStorePassword"`
    TrustAnchorCertificate string `json:"TrustAnchorCertificate"`
    
}

