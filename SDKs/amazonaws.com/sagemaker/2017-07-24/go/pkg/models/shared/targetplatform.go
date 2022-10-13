package shared

type TargetPlatform struct {
	Accelerator *TargetPlatformAcceleratorEnum `json:"Accelerator"`
	Arch        TargetPlatformArchEnum         `json:"Arch"`
	Os          TargetPlatformOsEnum           `json:"Os"`
}
