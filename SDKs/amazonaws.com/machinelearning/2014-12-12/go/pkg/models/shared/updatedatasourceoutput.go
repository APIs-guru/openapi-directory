package shared

// UpdateDataSourceOutput
// <p>Represents the output of an <code>UpdateDataSource</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>
type UpdateDataSourceOutput struct {
	DataSourceID *string `json:"DataSourceId,omitempty"`
}
