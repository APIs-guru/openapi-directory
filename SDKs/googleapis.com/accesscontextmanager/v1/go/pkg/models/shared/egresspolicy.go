package shared

type EgressPolicy struct {
	EgressFrom *EgressFrom `json:"egressFrom"`
	EgressTo   *EgressTo   `json:"egressTo"`
}
