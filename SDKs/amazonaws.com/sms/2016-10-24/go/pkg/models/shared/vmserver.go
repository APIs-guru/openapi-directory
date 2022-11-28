package shared

// VMServer
// Represents a VM server.
type VMServer struct {
	VMManagerName   *string            `json:"vmManagerName,omitempty"`
	VMManagerType   *VMManagerTypeEnum `json:"vmManagerType,omitempty"`
	VMName          *string            `json:"vmName,omitempty"`
	VMPath          *string            `json:"vmPath,omitempty"`
	VMServerAddress *VMServerAddress   `json:"vmServerAddress,omitempty"`
}
