package shared

type HardwareStatus struct {
	BatteryTemperatures []float32 `json:"batteryTemperatures,omitempty"`
	CPUTemperatures     []float32 `json:"cpuTemperatures,omitempty"`
	CPUUsages           []float32 `json:"cpuUsages,omitempty"`
	CreateTime          *string   `json:"createTime,omitempty"`
	FanSpeeds           []float32 `json:"fanSpeeds,omitempty"`
	GpuTemperatures     []float32 `json:"gpuTemperatures,omitempty"`
	SkinTemperatures    []float32 `json:"skinTemperatures,omitempty"`
}
