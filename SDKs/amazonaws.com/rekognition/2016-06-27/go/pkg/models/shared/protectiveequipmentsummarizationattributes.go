package shared



type ProtectiveEquipmentSummarizationAttributes struct {
    MinConfidence float32 `json:"MinConfidence"`
    RequiredEquipmentTypes []ProtectiveEquipmentTypeEnum `json:"RequiredEquipmentTypes"`
    
}

