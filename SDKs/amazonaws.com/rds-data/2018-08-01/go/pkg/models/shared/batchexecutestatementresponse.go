package shared

// BatchExecuteStatementResponse
// The response elements represent the output of a SQL statement over an array of data.
type BatchExecuteStatementResponse struct {
	UpdateResults []UpdateResult `json:"updateResults,omitempty"`
}
