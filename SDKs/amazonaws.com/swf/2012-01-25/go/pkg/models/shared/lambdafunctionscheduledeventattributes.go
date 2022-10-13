package shared

type LambdaFunctionScheduledEventAttributes struct {
	Control                      *string `json:"control"`
	DecisionTaskCompletedEventID int64   `json:"decisionTaskCompletedEventId"`
	ID                           string  `json:"id"`
	Input                        *string `json:"input"`
	Name                         string  `json:"name"`
	StartToCloseTimeout          *string `json:"startToCloseTimeout"`
}
