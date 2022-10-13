package shared

type StartSessionResult struct {
	SessionToken      *string            `json:"SessionToken"`
	TimingInformation *TimingInformation `json:"TimingInformation"`
}
