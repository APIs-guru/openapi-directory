package shared

// RobotSoftwareSuite
// Information about a robot software suite (ROS distribution).
type RobotSoftwareSuite struct {
	Name    *RobotSoftwareSuiteTypeEnum        `json:"name,omitempty"`
	Version *RobotSoftwareSuiteVersionTypeEnum `json:"version,omitempty"`
}
