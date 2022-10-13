package shared

type FindingAction struct {
	ActionType     *FindingActionTypeEnum `json:"actionType"`
	APICallDetails *APICallDetails        `json:"apiCallDetails"`
}
