package shared

// CreateDataSourceFromS3Output
// <p> Represents the output of a <code>CreateDataSourceFromS3</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromS3</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>
type CreateDataSourceFromS3Output struct {
	DataSourceID *string `json:"DataSourceId,omitempty"`
}
