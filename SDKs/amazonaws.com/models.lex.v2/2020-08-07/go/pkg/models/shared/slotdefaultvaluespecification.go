package shared

// SlotDefaultValueSpecification
// Defines a list of values that Amazon Lex should use as the default value for a slot.
type SlotDefaultValueSpecification struct {
	DefaultValueList []SlotDefaultValue `json:"defaultValueList"`
}
