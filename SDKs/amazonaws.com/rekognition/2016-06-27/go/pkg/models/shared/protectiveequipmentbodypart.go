package shared

// ProtectiveEquipmentBodyPart
// Information about a body part detected by <a>DetectProtectiveEquipment</a> that contains PPE. An array of <code>ProtectiveEquipmentBodyPart</code> objects is returned for each person detected by <code>DetectProtectiveEquipment</code>.
type ProtectiveEquipmentBodyPart struct {
	Confidence          *float32             `json:"Confidence,omitempty"`
	EquipmentDetections []EquipmentDetection `json:"EquipmentDetections,omitempty"`
	Name                *BodyPartEnum        `json:"Name,omitempty"`
}
