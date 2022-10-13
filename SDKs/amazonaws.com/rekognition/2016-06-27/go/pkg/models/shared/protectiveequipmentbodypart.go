package shared

type ProtectiveEquipmentBodyPart struct {
	Confidence          *float32             `json:"Confidence"`
	EquipmentDetections []EquipmentDetection `json:"EquipmentDetections"`
	Name                *BodyPartEnum        `json:"Name"`
}
