package shared

// Pose
// Indicates the pose of the face as determined by its pitch, roll, and yaw.
type Pose struct {
	Pitch *float32 `json:"Pitch,omitempty"`
	Roll  *float32 `json:"Roll,omitempty"`
	Yaw   *float32 `json:"Yaw,omitempty"`
}
