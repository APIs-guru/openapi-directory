package shared



type AttachStaticIPRequest struct {
    InstanceName string `json:"instanceName"`
    StaticIPName string `json:"staticIpName"`
    
}

