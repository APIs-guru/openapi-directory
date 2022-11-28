package shared

// SlotDefaultValueSpec
// Contains the default values for a slot. Default values are used when Amazon Lex hasn't determined a value for a slot.
type SlotDefaultValueSpec struct {
	DefaultValueList []SlotDefaultValue `json:"defaultValueList"`
}
