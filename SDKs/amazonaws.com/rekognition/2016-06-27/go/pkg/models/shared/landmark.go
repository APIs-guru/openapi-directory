package shared

// Landmark
// Indicates the location of the landmark on the face.
type Landmark struct {
	Type *LandmarkTypeEnum `json:"Type,omitempty"`
	X    *float32          `json:"X,omitempty"`
	Y    *float32          `json:"Y,omitempty"`
}
