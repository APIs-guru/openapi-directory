package shared

type DetectProtectiveEquipmentResponse struct {
	Persons                         []ProtectiveEquipmentPerson `json:"Persons,omitempty"`
	ProtectiveEquipmentModelVersion *string                     `json:"ProtectiveEquipmentModelVersion,omitempty"`
	Summary                         *ProtectiveEquipmentSummary `json:"Summary,omitempty"`
}
