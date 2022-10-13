package shared

type IPAddressUpdate struct {
	IP       *string `json:"Ip"`
	IPID     *string `json:"IpId"`
	SubnetID *string `json:"SubnetId"`
}
