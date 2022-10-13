package shared

type SQLRunConfiguration struct {
	InputID                            string                             `json:"InputId"`
	InputStartingPositionConfiguration InputStartingPositionConfiguration `json:"InputStartingPositionConfiguration"`
}
