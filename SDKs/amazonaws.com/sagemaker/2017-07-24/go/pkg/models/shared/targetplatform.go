package shared

// TargetPlatform
// Contains information about a target platform that you want your model to run on, such as OS, architecture, and accelerators. It is an alternative of <code>TargetDevice</code>.
type TargetPlatform struct {
	Accelerator *TargetPlatformAcceleratorEnum `json:"Accelerator,omitempty"`
	Arch        TargetPlatformArchEnum         `json:"Arch"`
	Os          TargetPlatformOsEnum           `json:"Os"`
}
