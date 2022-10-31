package shared



type ClearAddressRequest struct {
    Ethereumaddress string `json:"ethereumaddress"`
    Newaddress string `json:"newaddress"`
    Password string `json:"password"`
    
}

