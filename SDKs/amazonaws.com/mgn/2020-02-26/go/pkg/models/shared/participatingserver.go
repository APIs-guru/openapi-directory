package shared



type ParticipatingServer struct {
    LaunchStatus *LaunchStatusEnum `json:"launchStatus,omitempty"`
    SourceServerID *string `json:"sourceServerID,omitempty"`
    
}

