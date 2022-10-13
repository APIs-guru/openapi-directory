package operations

type DeleteGroupsGroupIDMembershipsUserIDPathParams struct {
	GroupID int32 `pathParam:"style=simple,explode=false,name=group_id"`
	UserID  int32 `pathParam:"style=simple,explode=false,name=user_id"`
}

type DeleteGroupsGroupIDMembershipsUserIDRequest struct {
	PathParams DeleteGroupsGroupIDMembershipsUserIDPathParams
}

type DeleteGroupsGroupIDMembershipsUserIDResponse struct {
	ContentType string
	StatusCode  int64
}
