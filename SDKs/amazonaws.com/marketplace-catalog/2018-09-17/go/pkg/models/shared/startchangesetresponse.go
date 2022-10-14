package shared

type StartChangeSetResponse struct {
	ChangeSetArn *string `json:"ChangeSetArn,omitempty"`
	ChangeSetID  *string `json:"ChangeSetId,omitempty"`
}
