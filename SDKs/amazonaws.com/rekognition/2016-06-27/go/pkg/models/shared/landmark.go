package shared

type Landmark struct {
	Type *LandmarkTypeEnum `json:"Type"`
	X    *float32          `json:"X"`
	Y    *float32          `json:"Y"`
}
