package shared

type TablesModelColumnInfo struct {
	ColumnDisplayName *string  `json:"columnDisplayName"`
	ColumnSpecName    *string  `json:"columnSpecName"`
	FeatureImportance *float32 `json:"featureImportance"`
}
