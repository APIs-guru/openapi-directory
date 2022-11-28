package shared

// AttachedDisk
// A new or an existing persistent disk (PD) or a local ssd attached to a VM instance.
type AttachedDisk struct {
	DeviceName   *string `json:"deviceName,omitempty"`
	ExistingDisk *string `json:"existingDisk,omitempty"`
	NewDisk      *Disk   `json:"newDisk,omitempty"`
}
