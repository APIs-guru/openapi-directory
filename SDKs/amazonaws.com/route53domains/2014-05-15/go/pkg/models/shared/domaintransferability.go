package shared

// DomainTransferability
// A complex type that contains information about whether the specified domain can be transferred to Route 53.
type DomainTransferability struct {
	Transferable *TransferableEnum `json:"Transferable,omitempty"`
}
