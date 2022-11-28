package shared

// DeleteDeletedNodesRequest
// Request model for deleting nodes from recycle bin
type DeleteDeletedNodesRequest struct {
	DeletedNodeIds []int64 `json:"deletedNodeIds"`
}
