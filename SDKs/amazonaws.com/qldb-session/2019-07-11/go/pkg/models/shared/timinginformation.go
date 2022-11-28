package shared

// TimingInformation
// Contains server-side performance information for a command. Amazon QLDB captures timing information between the times when it receives the request and when it sends the corresponding response.
type TimingInformation struct {
	ProcessingTimeMilliseconds *int64 `json:"ProcessingTimeMilliseconds,omitempty"`
}
