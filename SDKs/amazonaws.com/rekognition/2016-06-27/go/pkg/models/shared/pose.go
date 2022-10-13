package shared

type Pose struct {
	Pitch *float32 `json:"Pitch"`
	Roll  *float32 `json:"Roll"`
	Yaw   *float32 `json:"Yaw"`
}
