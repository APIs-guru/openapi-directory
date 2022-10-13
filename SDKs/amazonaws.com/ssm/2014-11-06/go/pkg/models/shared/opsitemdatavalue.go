package shared

type OpsItemDataValue struct {
	Type  *OpsItemDataTypeEnum `json:"Type"`
	Value *string              `json:"Value"`
}
