package shared

type IPAddressResponse struct {
	CreationTime     *string              `json:"CreationTime"`
	IP               *string              `json:"Ip"`
	IPID             *string              `json:"IpId"`
	ModificationTime *string              `json:"ModificationTime"`
	Status           *IPAddressStatusEnum `json:"Status"`
	StatusMessage    *string              `json:"StatusMessage"`
	SubnetID         *string              `json:"SubnetId"`
}
