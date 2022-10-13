package operations

type DeleteGroupsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteGroupsIDRequest struct {
	PathParams DeleteGroupsIDPathParams
}

type DeleteGroupsIDResponse struct {
	ContentType string
	StatusCode  int64
}
