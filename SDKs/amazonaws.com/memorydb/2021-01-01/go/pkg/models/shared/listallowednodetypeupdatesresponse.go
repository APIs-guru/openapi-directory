package shared

type ListAllowedNodeTypeUpdatesResponse struct {
	ScaleDownNodeTypes []string `json:"ScaleDownNodeTypes"`
	ScaleUpNodeTypes   []string `json:"ScaleUpNodeTypes"`
}
