package shared

type OpsItemDataValue struct {
	Type  *OpsItemDataTypeEnum `json:"Type,omitempty"`
	Value *string              `json:"Value,omitempty"`
}
