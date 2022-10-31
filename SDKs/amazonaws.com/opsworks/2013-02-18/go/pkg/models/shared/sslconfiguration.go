package shared



type SslConfiguration struct {
    Certificate string `json:"Certificate"`
    Chain *string `json:"Chain,omitempty"`
    PrivateKey string `json:"PrivateKey"`
    
}

