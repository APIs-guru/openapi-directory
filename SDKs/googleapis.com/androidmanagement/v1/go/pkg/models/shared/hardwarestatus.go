package shared

type HardwareStatus struct {
	BatteryTemperatures []float32 `json:"batteryTemperatures"`
	CPUTemperatures     []float32 `json:"cpuTemperatures"`
	CPUUsages           []float32 `json:"cpuUsages"`
	CreateTime          *string   `json:"createTime"`
	FanSpeeds           []float32 `json:"fanSpeeds"`
	GpuTemperatures     []float32 `json:"gpuTemperatures"`
	SkinTemperatures    []float32 `json:"skinTemperatures"`
}
