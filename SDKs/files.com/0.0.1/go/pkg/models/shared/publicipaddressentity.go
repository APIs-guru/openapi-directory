package shared

type PublicIPAddressEntity struct {
	IPAddress  *string `json:"ip_address,omitempty"`
	ServerName *string `json:"server_name,omitempty"`
}
