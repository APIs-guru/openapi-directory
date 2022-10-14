package shared

type SimulationSoftwareSuite struct {
	Name    *SimulationSoftwareSuiteTypeEnum `json:"name,omitempty"`
	Version *string                          `json:"version,omitempty"`
}
