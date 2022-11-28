package shared

// Token
// Token
type Token struct {
	DollarID string `json:"$id"`
	Expire   int32  `json:"expire"`
	Secret   string `json:"secret"`
	UserID   string `json:"userId"`
}
