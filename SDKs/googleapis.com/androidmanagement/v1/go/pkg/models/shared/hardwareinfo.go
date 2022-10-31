package shared



type HardwareInfo struct {
    BatteryShutdownTemperatures []float32 `json:"batteryShutdownTemperatures,omitempty"`
    BatteryThrottlingTemperatures []float32 `json:"batteryThrottlingTemperatures,omitempty"`
    Brand *string `json:"brand,omitempty"`
    CPUShutdownTemperatures []float32 `json:"cpuShutdownTemperatures,omitempty"`
    CPUThrottlingTemperatures []float32 `json:"cpuThrottlingTemperatures,omitempty"`
    DeviceBasebandVersion *string `json:"deviceBasebandVersion,omitempty"`
    EnterpriseSpecificID *string `json:"enterpriseSpecificId,omitempty"`
    GpuShutdownTemperatures []float32 `json:"gpuShutdownTemperatures,omitempty"`
    GpuThrottlingTemperatures []float32 `json:"gpuThrottlingTemperatures,omitempty"`
    Hardware *string `json:"hardware,omitempty"`
    Manufacturer *string `json:"manufacturer,omitempty"`
    Model *string `json:"model,omitempty"`
    SerialNumber *string `json:"serialNumber,omitempty"`
    SkinShutdownTemperatures []float32 `json:"skinShutdownTemperatures,omitempty"`
    SkinThrottlingTemperatures []float32 `json:"skinThrottlingTemperatures,omitempty"`
    
}

