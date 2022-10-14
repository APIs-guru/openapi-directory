package shared

type AcceptEulasResponse struct {
	EulaAcceptances []EulaAcceptance `json:"eulaAcceptances,omitempty"`
}
