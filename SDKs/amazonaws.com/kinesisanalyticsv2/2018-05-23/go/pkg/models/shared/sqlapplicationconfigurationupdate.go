package shared

type SQLApplicationConfigurationUpdate struct {
	InputUpdates               []InputUpdate               `json:"InputUpdates,omitempty"`
	OutputUpdates              []OutputUpdate              `json:"OutputUpdates,omitempty"`
	ReferenceDataSourceUpdates []ReferenceDataSourceUpdate `json:"ReferenceDataSourceUpdates,omitempty"`
}
