package shared

// VMServerAddress
// Represents a VM server location.
type VMServerAddress struct {
	VMID        *string `json:"vmId,omitempty"`
	VMManagerID *string `json:"vmManagerId,omitempty"`
}
