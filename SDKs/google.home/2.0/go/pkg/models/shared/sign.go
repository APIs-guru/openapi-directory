package shared



type Sign struct {
    Certificate string `json:"certificate"`
    IntermediateCerts []string `json:"intermediate_certs"`
    Nonce string `json:"nonce"`
    SignedData string `json:"signed_data"`
    
}

