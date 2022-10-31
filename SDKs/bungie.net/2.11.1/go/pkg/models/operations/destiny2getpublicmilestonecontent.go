package operations

type Destiny2GetPublicMilestoneContentPathParams struct {
	MilestoneHash int64 `pathParam:"style=simple,explode=false,name=milestoneHash"`
}

type Destiny2GetPublicMilestoneContentRequest struct {
	PathParams Destiny2GetPublicMilestoneContentPathParams
}

type Destiny2GetPublicMilestoneContentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
