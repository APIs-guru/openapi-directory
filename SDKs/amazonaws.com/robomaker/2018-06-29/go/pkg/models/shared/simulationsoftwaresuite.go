package shared

// SimulationSoftwareSuite
// Information about a simulation software suite.
type SimulationSoftwareSuite struct {
	Name    *SimulationSoftwareSuiteTypeEnum `json:"name,omitempty"`
	Version *string                          `json:"version,omitempty"`
}
