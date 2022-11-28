package shared

// Egress
// The details of the egress info. One of the following options should be set.
type Egress struct {
	PeeredVpc *PeeredVpc `json:"peeredVpc,omitempty"`
}
