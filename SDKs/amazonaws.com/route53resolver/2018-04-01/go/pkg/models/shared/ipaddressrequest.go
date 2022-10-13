package shared

type IPAddressRequest struct {
	IP       *string `json:"Ip"`
	SubnetID string  `json:"SubnetId"`
}
