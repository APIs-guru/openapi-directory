package shared

type AssociateMemberToGroupRequest struct {
	GroupID        string `json:"GroupId"`
	MemberID       string `json:"MemberId"`
	OrganizationID string `json:"OrganizationId"`
}
