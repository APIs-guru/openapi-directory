package shared

type ProtectiveEquipmentBodyPart struct {
	Confidence          *float32             `json:"Confidence,omitempty"`
	EquipmentDetections []EquipmentDetection `json:"EquipmentDetections,omitempty"`
	Name                *BodyPartEnum        `json:"Name,omitempty"`
}
