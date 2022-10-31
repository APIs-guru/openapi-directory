package shared



type TagResourcesInput struct {
    ResourceArnList []string `json:"ResourceARNList"`
    Tags map[string]string `json:"Tags"`
    
}

