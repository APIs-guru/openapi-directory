package shared

type SubscribeAddress struct {
	Contractaddress string `json:"contractaddress"`
	Ethereumaddress string `json:"ethereumaddress"`
	Ok              bool   `json:"ok"`
	URL             string `json:"url"`
}
