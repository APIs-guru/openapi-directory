package shared



type Notification struct {
    JobStatesToNotify []JobStateEnum `json:"JobStatesToNotify,omitempty"`
    NotifyAll *bool `json:"NotifyAll,omitempty"`
    SnsTopicArn *string `json:"SnsTopicARN,omitempty"`
    
}

