package shared

type ExecuteSQLResponse struct {
	SQLStatementResults []SQLStatementResult `json:"sqlStatementResults,omitempty"`
}
