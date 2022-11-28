package shared

// PeeredVpc
// The peered VPC owned by the consumer project.
type PeeredVpc struct {
	NetworkVpc *string `json:"networkVpc,omitempty"`
}
