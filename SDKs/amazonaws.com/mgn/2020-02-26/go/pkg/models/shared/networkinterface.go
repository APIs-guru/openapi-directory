package shared

type NetworkInterface struct {
	Ips        []string `json:"ips"`
	IsPrimary  *bool    `json:"isPrimary"`
	MacAddress *string  `json:"macAddress"`
}
