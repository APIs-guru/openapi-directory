package shared

type IPAddressUpdate struct {
	IP       *string `json:"Ip,omitempty"`
	IPID     *string `json:"IpId,omitempty"`
	SubnetID *string `json:"SubnetId,omitempty"`
}
