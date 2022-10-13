package shared

type SendTokenRequest struct {
	Amount          int32  `json:"amount"`
	Contractaddress string `json:"contractaddress"`
	From            string `json:"from"`
	Identifier      string `json:"identifier"`
	Password        string `json:"password"`
	To              string `json:"to"`
}
