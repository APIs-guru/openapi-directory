package shared

type ApplicationUpdate struct {
	ApplicationCodeUpdate          *string                         `json:"ApplicationCodeUpdate,omitempty"`
	CloudWatchLoggingOptionUpdates []CloudWatchLoggingOptionUpdate `json:"CloudWatchLoggingOptionUpdates,omitempty"`
	InputUpdates                   []InputUpdate                   `json:"InputUpdates,omitempty"`
	OutputUpdates                  []OutputUpdate                  `json:"OutputUpdates,omitempty"`
	ReferenceDataSourceUpdates     []ReferenceDataSourceUpdate     `json:"ReferenceDataSourceUpdates,omitempty"`
}
