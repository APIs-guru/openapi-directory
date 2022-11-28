package shared

// OpsItemDataValue
// An object that defines the value of the key and its type in the OperationalData map.
type OpsItemDataValue struct {
	Type  *OpsItemDataTypeEnum `json:"Type,omitempty"`
	Value *string              `json:"Value,omitempty"`
}
