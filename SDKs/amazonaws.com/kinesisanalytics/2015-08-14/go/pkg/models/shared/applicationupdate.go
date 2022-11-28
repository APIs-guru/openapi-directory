package shared

// ApplicationUpdate
// Describes updates to apply to an existing Amazon Kinesis Analytics application.
type ApplicationUpdate struct {
	ApplicationCodeUpdate          *string                         `json:"ApplicationCodeUpdate,omitempty"`
	CloudWatchLoggingOptionUpdates []CloudWatchLoggingOptionUpdate `json:"CloudWatchLoggingOptionUpdates,omitempty"`
	InputUpdates                   []InputUpdate                   `json:"InputUpdates,omitempty"`
	OutputUpdates                  []OutputUpdate                  `json:"OutputUpdates,omitempty"`
	ReferenceDataSourceUpdates     []ReferenceDataSourceUpdate     `json:"ReferenceDataSourceUpdates,omitempty"`
}
