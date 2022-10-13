package shared

type ParticipatingServer struct {
	LaunchStatus   *LaunchStatusEnum `json:"launchStatus"`
	SourceServerID *string           `json:"sourceServerID"`
}
