package shared



type TargetPlatform struct {
    Accelerator *TargetPlatformAcceleratorEnum `json:"Accelerator,omitempty"`
    Arch TargetPlatformArchEnum `json:"Arch"`
    Os TargetPlatformOsEnum `json:"Os"`
    
}

