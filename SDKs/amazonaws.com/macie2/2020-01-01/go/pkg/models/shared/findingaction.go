package shared



type FindingAction struct {
    ActionType *FindingActionTypeEnum `json:"actionType,omitempty"`
    APICallDetails *APICallDetails `json:"apiCallDetails,omitempty"`
    
}

