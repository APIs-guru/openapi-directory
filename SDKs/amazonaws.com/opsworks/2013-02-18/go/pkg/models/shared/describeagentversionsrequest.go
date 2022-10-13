package shared

type DescribeAgentVersionsRequest struct {
	ConfigurationManager *StackConfigurationManager `json:"ConfigurationManager"`
	StackID              *string                    `json:"StackId"`
}
