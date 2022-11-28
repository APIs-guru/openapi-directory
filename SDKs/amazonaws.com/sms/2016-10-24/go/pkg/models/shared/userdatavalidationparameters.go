package shared

// UserDataValidationParameters
// Contains validation parameters.
type UserDataValidationParameters struct {
	ScriptType *ScriptTypeEnum `json:"scriptType,omitempty"`
	Source     *Source         `json:"source,omitempty"`
}
