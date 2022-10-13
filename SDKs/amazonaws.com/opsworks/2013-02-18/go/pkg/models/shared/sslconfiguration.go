package shared

type SslConfiguration struct {
	Certificate string  `json:"Certificate"`
	Chain       *string `json:"Chain"`
	PrivateKey  string  `json:"PrivateKey"`
}
