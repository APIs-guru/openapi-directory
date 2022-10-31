package shared



type Certificate struct {
    CaCert string `json:"ca_cert"`
    ServerCert string `json:"server_cert"`
    UserCert string `json:"user_cert"`
    UserKey string `json:"user_key"`
    
}

