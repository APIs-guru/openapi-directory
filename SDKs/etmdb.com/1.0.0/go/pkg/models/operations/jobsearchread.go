package operations

type JobSearchReadPathParams struct {
	JobTitle string `pathParam:"style=simple,explode=false,name=job_title"`
}

type JobSearchReadRequest struct {
	PathParams JobSearchReadPathParams
}

type JobSearchReadResponse struct {
	ContentType string
	StatusCode  int64
}
