package shared

type BotAliasLocaleSettings struct {
	CodeHookSpecification *CodeHookSpecification `json:"codeHookSpecification"`
	Enabled               bool                   `json:"enabled"`
}
