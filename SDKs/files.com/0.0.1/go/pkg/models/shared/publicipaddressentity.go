package shared

// PublicIPAddressEntity
// List all possible public IP addresses
type PublicIPAddressEntity struct {
	IPAddress  *string `json:"ip_address,omitempty"`
	ServerName *string `json:"server_name,omitempty"`
}
