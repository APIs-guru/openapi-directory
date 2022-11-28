package shared

// ParticipatingServer
// Server participating in Job.
type ParticipatingServer struct {
	LaunchStatus   *LaunchStatusEnum `json:"launchStatus,omitempty"`
	SourceServerID *string           `json:"sourceServerID,omitempty"`
}
