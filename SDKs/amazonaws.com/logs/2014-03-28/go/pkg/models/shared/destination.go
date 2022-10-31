package shared



type Destination struct {
    AccessPolicy *string `json:"accessPolicy,omitempty"`
    Arn *string `json:"arn,omitempty"`
    CreationTime *int64 `json:"creationTime,omitempty"`
    DestinationName *string `json:"destinationName,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    TargetArn *string `json:"targetArn,omitempty"`
    
}

