package shared

type UnsubscribeAddress struct {
	Contractaddress string `json:"contractaddress"`
	Deleted         bool   `json:"deleted"`
	Ethereumaddress string `json:"ethereumaddress"`
	Ok              bool   `json:"ok"`
	URL             string `json:"url"`
}
