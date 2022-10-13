package shared

type StartChangeSetResponse struct {
	ChangeSetArn *string `json:"ChangeSetArn"`
	ChangeSetID  *string `json:"ChangeSetId"`
}
