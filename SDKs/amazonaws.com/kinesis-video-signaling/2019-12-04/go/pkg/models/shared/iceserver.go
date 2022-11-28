package shared

// IceServer
// A structure for the ICE server connection data.
type IceServer struct {
	Password *string  `json:"Password,omitempty"`
	TTL      *int64   `json:"Ttl,omitempty"`
	Uris     []string `json:"Uris,omitempty"`
	Username *string  `json:"Username,omitempty"`
}
