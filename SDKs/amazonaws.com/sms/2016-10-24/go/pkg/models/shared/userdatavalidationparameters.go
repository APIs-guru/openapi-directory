package shared

type UserDataValidationParameters struct {
	ScriptType *ScriptTypeEnum `json:"scriptType"`
	Source     *Source         `json:"source"`
}
