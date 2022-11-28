package shared

// HumanLoopRequestSource
// Container for configuring the source of human task requests.
type HumanLoopRequestSource struct {
	AwsManagedHumanLoopRequestSource AwsManagedHumanLoopRequestSourceEnum `json:"AwsManagedHumanLoopRequestSource"`
}
