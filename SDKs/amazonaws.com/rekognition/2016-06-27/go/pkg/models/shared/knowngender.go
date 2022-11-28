package shared

// KnownGender
// The known gender identity for the celebrity that matches the provided ID.
type KnownGender struct {
	Type *KnownGenderTypeEnum `json:"Type,omitempty"`
}
