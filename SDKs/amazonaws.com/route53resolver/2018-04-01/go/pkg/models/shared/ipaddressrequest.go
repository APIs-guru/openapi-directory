package shared



type IPAddressRequest struct {
    IP *string `json:"Ip,omitempty"`
    SubnetID string `json:"SubnetId"`
    
}

