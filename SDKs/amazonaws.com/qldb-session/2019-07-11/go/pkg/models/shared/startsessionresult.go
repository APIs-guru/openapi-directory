package shared

type StartSessionResult struct {
	SessionToken      *string            `json:"SessionToken,omitempty"`
	TimingInformation *TimingInformation `json:"TimingInformation,omitempty"`
}
