package shared

// CoversBodyPart
// Information about an item of Personal Protective Equipment covering a corresponding body part. For more information, see <a>DetectProtectiveEquipment</a>.
type CoversBodyPart struct {
	Confidence *float32 `json:"Confidence,omitempty"`
	Value      *bool    `json:"Value,omitempty"`
}
