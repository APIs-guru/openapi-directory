package shared

type SQLApplicationConfigurationUpdate struct {
	InputUpdates               []InputUpdate               `json:"InputUpdates"`
	OutputUpdates              []OutputUpdate              `json:"OutputUpdates"`
	ReferenceDataSourceUpdates []ReferenceDataSourceUpdate `json:"ReferenceDataSourceUpdates"`
}
