package shared

type IceServer struct {
	Password *string  `json:"Password"`
	TTL      *int64   `json:"Ttl"`
	Uris     []string `json:"Uris"`
	Username *string  `json:"Username"`
}
