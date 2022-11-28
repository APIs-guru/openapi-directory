package shared

// BotAliasLocaleSettings
// Specifies settings that are unique to a locale. For example, you can use different Lambda function depending on the bot's locale.
type BotAliasLocaleSettings struct {
	CodeHookSpecification *CodeHookSpecification `json:"codeHookSpecification,omitempty"`
	Enabled               bool                   `json:"enabled"`
}
