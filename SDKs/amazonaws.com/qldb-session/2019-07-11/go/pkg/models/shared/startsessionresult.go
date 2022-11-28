package shared

// StartSessionResult
// Contains the details of the started session.
type StartSessionResult struct {
	SessionToken      *string            `json:"SessionToken,omitempty"`
	TimingInformation *TimingInformation `json:"TimingInformation,omitempty"`
}
