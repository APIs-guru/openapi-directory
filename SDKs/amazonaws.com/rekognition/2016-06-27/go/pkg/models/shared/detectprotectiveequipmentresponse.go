package shared

type DetectProtectiveEquipmentResponse struct {
	Persons                         []ProtectiveEquipmentPerson `json:"Persons"`
	ProtectiveEquipmentModelVersion *string                     `json:"ProtectiveEquipmentModelVersion"`
	Summary                         *ProtectiveEquipmentSummary `json:"Summary"`
}
