package shared

type PublicIPAddressEntity struct {
	IPAddress  *string `json:"ip_address"`
	ServerName *string `json:"server_name"`
}
