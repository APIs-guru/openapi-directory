package shared

type BatchExecuteStatementResponse struct {
	UpdateResults []UpdateResult `json:"updateResults,omitempty"`
}
