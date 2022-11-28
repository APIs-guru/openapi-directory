package shared

// ProtectiveEquipmentPerson
// A person detected by a call to <a>DetectProtectiveEquipment</a>. The API returns all persons detected in the input image in an array of <code>ProtectiveEquipmentPerson</code> objects.
type ProtectiveEquipmentPerson struct {
	BodyParts   []ProtectiveEquipmentBodyPart `json:"BodyParts,omitempty"`
	BoundingBox *BoundingBox                  `json:"BoundingBox,omitempty"`
	Confidence  *float32                      `json:"Confidence,omitempty"`
	ID          *int64                        `json:"Id,omitempty"`
}
