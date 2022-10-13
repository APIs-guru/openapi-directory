package shared

type CancelChangeSetResponse struct {
	ChangeSetArn *string `json:"ChangeSetArn"`
	ChangeSetID  *string `json:"ChangeSetId"`
}
