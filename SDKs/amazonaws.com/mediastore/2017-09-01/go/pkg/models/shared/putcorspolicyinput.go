package shared



type PutCorsPolicyInput struct {
    ContainerName string `json:"ContainerName"`
    CorsPolicy []CorsRule `json:"CorsPolicy"`
    
}

