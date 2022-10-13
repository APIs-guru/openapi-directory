package shared

type ApplicationUpdate struct {
	ApplicationCodeUpdate          *string                         `json:"ApplicationCodeUpdate"`
	CloudWatchLoggingOptionUpdates []CloudWatchLoggingOptionUpdate `json:"CloudWatchLoggingOptionUpdates"`
	InputUpdates                   []InputUpdate                   `json:"InputUpdates"`
	OutputUpdates                  []OutputUpdate                  `json:"OutputUpdates"`
	ReferenceDataSourceUpdates     []ReferenceDataSourceUpdate     `json:"ReferenceDataSourceUpdates"`
}
