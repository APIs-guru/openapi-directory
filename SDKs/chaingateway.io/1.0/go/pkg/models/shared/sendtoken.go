package shared

type SendToken struct {
	Amount          int32  `json:"amount"`
	Contractaddress string `json:"contractaddress"`
	From            string `json:"from"`
	Identifier      string `json:"identifier"`
	Ok              bool   `json:"ok"`
	To              string `json:"to"`
	Txid            string `json:"txid"`
}
