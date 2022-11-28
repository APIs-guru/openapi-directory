package shared

// ChangeGroupMembersRequest
// List of user IDs
type ChangeGroupMembersRequest struct {
	Ids []int64 `json:"ids"`
}
