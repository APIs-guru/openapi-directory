package shared

type EquipmentDetection struct {
	BoundingBox    *BoundingBox                 `json:"BoundingBox"`
	Confidence     *float32                     `json:"Confidence"`
	CoversBodyPart *CoversBodyPart              `json:"CoversBodyPart"`
	Type           *ProtectiveEquipmentTypeEnum `json:"Type"`
}
