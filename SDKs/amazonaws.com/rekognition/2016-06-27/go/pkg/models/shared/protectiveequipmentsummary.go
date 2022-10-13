package shared

type ProtectiveEquipmentSummary struct {
	PersonsIndeterminate            []int64 `json:"PersonsIndeterminate"`
	PersonsWithRequiredEquipment    []int64 `json:"PersonsWithRequiredEquipment"`
	PersonsWithoutRequiredEquipment []int64 `json:"PersonsWithoutRequiredEquipment"`
}
