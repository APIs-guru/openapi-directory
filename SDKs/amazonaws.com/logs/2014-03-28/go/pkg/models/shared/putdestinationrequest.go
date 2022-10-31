package shared



type PutDestinationRequest struct {
    DestinationName string `json:"destinationName"`
    RoleArn string `json:"roleArn"`
    TargetArn string `json:"targetArn"`
    
}

