package shared

type BotAliasLocaleSettings struct {
	CodeHookSpecification *CodeHookSpecification `json:"codeHookSpecification,omitempty"`
	Enabled               bool                   `json:"enabled"`
}
