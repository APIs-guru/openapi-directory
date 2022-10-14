package shared

type ListCustomPluginsResponse struct {
	CustomPlugins []CustomPluginSummary `json:"customPlugins,omitempty"`
	NextToken     *string               `json:"nextToken,omitempty"`
}
