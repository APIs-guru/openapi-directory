package shared

type ListCustomPluginsResponse struct {
	CustomPlugins []CustomPluginSummary `json:"customPlugins"`
	NextToken     *string               `json:"nextToken"`
}
