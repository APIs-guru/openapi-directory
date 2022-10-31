package shared



type SubscribeAddressRequest struct {
    Contractaddress string `json:"contractaddress"`
    Ethereumaddress string `json:"ethereumaddress"`
    URL string `json:"url"`
    
}

