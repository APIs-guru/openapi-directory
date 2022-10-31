package shared

type DescribeLayersRequest struct {
	LayerIds []string `json:"LayerIds,omitempty"`
	StackID  *string  `json:"StackId,omitempty"`
}
