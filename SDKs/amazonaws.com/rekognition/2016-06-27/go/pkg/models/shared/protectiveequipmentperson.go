package shared

type ProtectiveEquipmentPerson struct {
	BodyParts   []ProtectiveEquipmentBodyPart `json:"BodyParts,omitempty"`
	BoundingBox *BoundingBox                  `json:"BoundingBox,omitempty"`
	Confidence  *float32                      `json:"Confidence,omitempty"`
	ID          *int64                        `json:"Id,omitempty"`
}
