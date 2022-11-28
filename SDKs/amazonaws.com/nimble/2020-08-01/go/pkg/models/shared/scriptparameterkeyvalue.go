package shared

// ScriptParameterKeyValue
// A parameter for a studio component script, in the form of a key:value pair.
type ScriptParameterKeyValue struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
