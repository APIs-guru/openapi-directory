package shared

// ObfuscationSetting
// Determines whether Amazon Lex obscures slot values in conversation logs.
type ObfuscationSetting struct {
	ObfuscationSettingType ObfuscationSettingTypeEnum `json:"obfuscationSettingType"`
}
