package shared



type CloudWatchLogGroupLogDestination struct {
    CloudWatchLogGroupArn string `json:"cloudWatchLogGroupArn"`
    LogPrefix string `json:"logPrefix"`
    
}

