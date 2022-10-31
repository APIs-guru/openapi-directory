package shared

type NewAddress struct {
	Ethereumaddress string `json:"ethereumaddress"`
	Ok              bool   `json:"ok"`
	Password        string `json:"password"`
}
