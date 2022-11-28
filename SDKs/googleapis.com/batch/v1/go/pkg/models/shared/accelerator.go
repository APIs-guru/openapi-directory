package shared

// Accelerator
// Accelerator describes Compute Engine accelerators to be attached to the VM.
type Accelerator struct {
	Count             *string `json:"count,omitempty"`
	InstallGpuDrivers *bool   `json:"installGpuDrivers,omitempty"`
	Type              *string `json:"type,omitempty"`
}
