package shared

type ClearAddress struct {
	Amount          float64 `json:"amount"`
	Ethereumaddress string  `json:"ethereumaddress"`
	Gas             float64 `json:"gas"`
	Newaddress      string  `json:"newaddress"`
	Ok              bool    `json:"ok"`
	Total           string  `json:"total"`
	Txid            string  `json:"txid"`
}
