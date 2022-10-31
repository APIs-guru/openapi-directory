package operations

type Destiny2GetPostGameCarnageReportPathParams struct {
	ActivityID int64 `pathParam:"style=simple,explode=false,name=activityId"`
}

type Destiny2GetPostGameCarnageReportRequest struct {
	PathParams Destiny2GetPostGameCarnageReportPathParams
}

type Destiny2GetPostGameCarnageReportResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
