package shared

type RequestCountAllocation struct {
	Proxy *float64 `json:"proxy"`
	Unify *float64 `json:"unify"`
	Vault *float64 `json:"vault"`
}
