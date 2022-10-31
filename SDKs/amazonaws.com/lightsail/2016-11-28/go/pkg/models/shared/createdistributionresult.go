package shared



type CreateDistributionResult struct {
    Distribution *LightsailDistribution `json:"distribution,omitempty"`
    Operation *Operation `json:"operation,omitempty"`
    
}

