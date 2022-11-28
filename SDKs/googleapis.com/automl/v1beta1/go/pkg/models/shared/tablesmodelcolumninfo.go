package shared

// TablesModelColumnInfo
// An information specific to given column and Tables Model, in context of the Model and the predictions created by it.
type TablesModelColumnInfo struct {
	ColumnDisplayName *string  `json:"columnDisplayName,omitempty"`
	ColumnSpecName    *string  `json:"columnSpecName,omitempty"`
	FeatureImportance *float32 `json:"featureImportance,omitempty"`
}
