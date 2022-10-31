package shared



type DescribeAgentVersionsRequest struct {
    ConfigurationManager *StackConfigurationManager `json:"ConfigurationManager,omitempty"`
    StackID *string `json:"StackId,omitempty"`
    
}

