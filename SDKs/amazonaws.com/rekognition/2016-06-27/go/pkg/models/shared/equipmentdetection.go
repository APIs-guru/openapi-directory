package shared

type EquipmentDetection struct {
	BoundingBox    *BoundingBox                 `json:"BoundingBox,omitempty"`
	Confidence     *float32                     `json:"Confidence,omitempty"`
	CoversBodyPart *CoversBodyPart              `json:"CoversBodyPart,omitempty"`
	Type           *ProtectiveEquipmentTypeEnum `json:"Type,omitempty"`
}
