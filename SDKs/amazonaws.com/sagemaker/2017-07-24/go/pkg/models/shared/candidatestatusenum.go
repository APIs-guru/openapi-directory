package shared

type CandidateStatusEnum string

const (
	CandidateStatusEnumCompleted  CandidateStatusEnum = "Completed"
	CandidateStatusEnumInProgress CandidateStatusEnum = "InProgress"
	CandidateStatusEnumFailed     CandidateStatusEnum = "Failed"
	CandidateStatusEnumStopped    CandidateStatusEnum = "Stopped"
	CandidateStatusEnumStopping   CandidateStatusEnum = "Stopping"
)
