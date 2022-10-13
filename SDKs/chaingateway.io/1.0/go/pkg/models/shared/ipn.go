package shared

type Ipn struct {
	Contractaddress string `json:"contractaddress"`
	Ethereumaddress string `json:"ethereumaddress"`
	URL             string `json:"url"`
}
