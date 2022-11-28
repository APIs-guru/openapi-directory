package shared

// EquipmentDetection
// Information about an item of Personal Protective Equipment (PPE) detected by <a>DetectProtectiveEquipment</a>. For more information, see <a>DetectProtectiveEquipment</a>.
type EquipmentDetection struct {
	BoundingBox    *BoundingBox                 `json:"BoundingBox,omitempty"`
	Confidence     *float32                     `json:"Confidence,omitempty"`
	CoversBodyPart *CoversBodyPart              `json:"CoversBodyPart,omitempty"`
	Type           *ProtectiveEquipmentTypeEnum `json:"Type,omitempty"`
}
