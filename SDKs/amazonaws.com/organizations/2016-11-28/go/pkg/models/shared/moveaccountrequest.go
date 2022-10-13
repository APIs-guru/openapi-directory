package shared

type MoveAccountRequest struct {
	AccountID           string `json:"AccountId"`
	DestinationParentID string `json:"DestinationParentId"`
	SourceParentID      string `json:"SourceParentId"`
}
