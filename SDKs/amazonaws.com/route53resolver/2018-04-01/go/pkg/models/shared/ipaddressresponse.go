package shared



type IPAddressResponse struct {
    CreationTime *string `json:"CreationTime,omitempty"`
    IP *string `json:"Ip,omitempty"`
    IPID *string `json:"IpId,omitempty"`
    ModificationTime *string `json:"ModificationTime,omitempty"`
    Status *IPAddressStatusEnum `json:"Status,omitempty"`
    StatusMessage *string `json:"StatusMessage,omitempty"`
    SubnetID *string `json:"SubnetId,omitempty"`
    
}

