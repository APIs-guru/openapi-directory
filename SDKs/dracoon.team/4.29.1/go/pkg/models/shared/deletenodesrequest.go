package shared

// DeleteNodesRequest
// Request model for deleting nodes
type DeleteNodesRequest struct {
	NodeIds []int64 `json:"nodeIds"`
}
