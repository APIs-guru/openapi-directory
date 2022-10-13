package shared

type VMServerAddress struct {
	VMID        *string `json:"vmId"`
	VMManagerID *string `json:"vmManagerId"`
}
