package shared

type GetTokenBalanceRequest struct {
	Contractaddress string `json:"contractaddress"`
	Ethereumaddress string `json:"ethereumaddress"`
}
