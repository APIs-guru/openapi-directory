package shared



type ProtectiveEquipmentSummary struct {
    PersonsIndeterminate []int64 `json:"PersonsIndeterminate,omitempty"`
    PersonsWithRequiredEquipment []int64 `json:"PersonsWithRequiredEquipment,omitempty"`
    PersonsWithoutRequiredEquipment []int64 `json:"PersonsWithoutRequiredEquipment,omitempty"`
    
}

