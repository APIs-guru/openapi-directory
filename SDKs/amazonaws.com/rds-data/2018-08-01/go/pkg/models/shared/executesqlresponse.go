package shared

// ExecuteSQLResponse
// The response elements represent the output of a request to run one or more SQL statements.
type ExecuteSQLResponse struct {
	SQLStatementResults []SQLStatementResult `json:"sqlStatementResults,omitempty"`
}
