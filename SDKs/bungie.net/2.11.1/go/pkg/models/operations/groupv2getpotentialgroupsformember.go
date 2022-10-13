package operations

type GroupV2GetPotentialGroupsForMemberPathParams struct {
	Filter         int32 `pathParam:"style=simple,explode=false,name=filter"`
	GroupType      int32 `pathParam:"style=simple,explode=false,name=groupType"`
	MembershipID   int64 `pathParam:"style=simple,explode=false,name=membershipId"`
	MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
}

type GroupV2GetPotentialGroupsForMemberRequest struct {
	PathParams GroupV2GetPotentialGroupsForMemberPathParams
}

type GroupV2GetPotentialGroupsForMemberResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
