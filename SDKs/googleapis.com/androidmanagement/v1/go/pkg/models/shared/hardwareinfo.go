package shared

type HardwareInfo struct {
	BatteryShutdownTemperatures   []float32 `json:"batteryShutdownTemperatures"`
	BatteryThrottlingTemperatures []float32 `json:"batteryThrottlingTemperatures"`
	Brand                         *string   `json:"brand"`
	CPUShutdownTemperatures       []float32 `json:"cpuShutdownTemperatures"`
	CPUThrottlingTemperatures     []float32 `json:"cpuThrottlingTemperatures"`
	DeviceBasebandVersion         *string   `json:"deviceBasebandVersion"`
	EnterpriseSpecificID          *string   `json:"enterpriseSpecificId"`
	GpuShutdownTemperatures       []float32 `json:"gpuShutdownTemperatures"`
	GpuThrottlingTemperatures     []float32 `json:"gpuThrottlingTemperatures"`
	Hardware                      *string   `json:"hardware"`
	Manufacturer                  *string   `json:"manufacturer"`
	Model                         *string   `json:"model"`
	SerialNumber                  *string   `json:"serialNumber"`
	SkinShutdownTemperatures      []float32 `json:"skinShutdownTemperatures"`
	SkinThrottlingTemperatures    []float32 `json:"skinThrottlingTemperatures"`
}
