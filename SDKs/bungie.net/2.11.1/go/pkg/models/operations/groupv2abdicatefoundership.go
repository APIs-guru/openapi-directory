package operations

type GroupV2AbdicateFoundershipPathParams struct {
	FounderIDNew   int64 `pathParam:"style=simple,explode=false,name=founderIdNew"`
	GroupID        int64 `pathParam:"style=simple,explode=false,name=groupId"`
	MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
}

type GroupV2AbdicateFoundershipRequest struct {
	PathParams GroupV2AbdicateFoundershipPathParams
}

type GroupV2AbdicateFoundershipResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
