package shared

type ProtectiveEquipmentPerson struct {
	BodyParts   []ProtectiveEquipmentBodyPart `json:"BodyParts"`
	BoundingBox *BoundingBox                  `json:"BoundingBox"`
	Confidence  *float32                      `json:"Confidence"`
	ID          *int64                        `json:"Id"`
}
