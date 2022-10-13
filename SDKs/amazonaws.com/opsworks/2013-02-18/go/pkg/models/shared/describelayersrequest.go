package shared

type DescribeLayersRequest struct {
	LayerIds []string `json:"LayerIds"`
	StackID  *string  `json:"StackId"`
}
