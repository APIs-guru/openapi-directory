package shared

type GetTokenBalance struct {
	Balance         int32  `json:"balance"`
	Contractaddress string `json:"contractaddress"`
	Ethereumaddress string `json:"ethereumaddress"`
	Ok              bool   `json:"ok"`
}
