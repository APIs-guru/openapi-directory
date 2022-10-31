package shared



type InstancePatchStateFilter struct {
    Key string `json:"Key"`
    Type InstancePatchStateOperatorTypeEnum `json:"Type"`
    Values []string `json:"Values"`
    
}

