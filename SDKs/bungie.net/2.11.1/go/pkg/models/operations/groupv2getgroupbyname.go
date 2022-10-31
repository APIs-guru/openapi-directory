package operations

type GroupV2GetGroupByNamePathParams struct {
	GroupName string `pathParam:"style=simple,explode=false,name=groupName"`
	GroupType int32  `pathParam:"style=simple,explode=false,name=groupType"`
}

type GroupV2GetGroupByNameRequest struct {
	PathParams GroupV2GetGroupByNamePathParams
}

type GroupV2GetGroupByNameResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
