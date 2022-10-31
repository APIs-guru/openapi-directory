package shared



type UntagLogGroupRequest struct {
    LogGroupName string `json:"logGroupName"`
    Tags []string `json:"tags"`
    
}

