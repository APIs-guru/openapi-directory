package shared



type UpdateEndpointWeightsAndCapacitiesInput struct {
    DesiredWeightsAndCapacities []DesiredWeightAndCapacity `json:"DesiredWeightsAndCapacities"`
    EndpointName string `json:"EndpointName"`
    
}

