package shared

type ListAllowedNodeTypeUpdatesResponse struct {
	ScaleDownNodeTypes []string `json:"ScaleDownNodeTypes,omitempty"`
	ScaleUpNodeTypes   []string `json:"ScaleUpNodeTypes,omitempty"`
}
