package shared

type DeviceInfo struct {
	FourkBlocked                int32        `json:"4k_blocked"`
	Capabilities                Capabilities `json:"capabilities"`
	CloudDeviceID               string       `json:"cloud_device_id"`
	FactoryCountryCode          string       `json:"factory_country_code"`
	HotspotBssid                string       `json:"hotspot_bssid"`
	LocalAuthorizationTokenHash string       `json:"local_authorization_token_hash"`
	MacAddress                  string       `json:"mac_address"`
	Manufacturer                string       `json:"manufacturer"`
	ModelName                   string       `json:"model_name"`
	ProductName                 string       `json:"product_name"`
	PublicKey                   string       `json:"public_key"`
	SsdpUdn                     string       `json:"ssdp_udn"`
	UmaClientID                 string       `json:"uma_client_id"`
	Uptime                      float64      `json:"uptime"`
	WeaveDeviceID               string       `json:"weave_device_id"`
}
