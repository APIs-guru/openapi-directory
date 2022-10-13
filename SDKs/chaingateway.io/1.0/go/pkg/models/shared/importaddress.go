package shared

type ImportAddress struct {
	Ethaddress string `json:"ethaddress"`
	Filename   string `json:"filename"`
	Ok         bool   `json:"ok"`
}
