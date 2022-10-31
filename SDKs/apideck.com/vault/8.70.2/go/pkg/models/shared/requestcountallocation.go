package shared

type RequestCountAllocation struct {
	Proxy *float64 `json:"proxy,omitempty"`
	Unify *float64 `json:"unify,omitempty"`
	Vault *float64 `json:"vault,omitempty"`
}
