package shared



type ContentProviderEndpoint struct {
    PackageName *string `json:"packageName,omitempty"`
    SigningCertsSha256 []string `json:"signingCertsSha256,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

