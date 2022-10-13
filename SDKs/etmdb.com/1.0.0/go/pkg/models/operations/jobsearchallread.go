package operations

type JobSearchallReadPathParams struct {
	CompanyName string `pathParam:"style=simple,explode=false,name=company_name"`
}

type JobSearchallReadRequest struct {
	PathParams JobSearchallReadPathParams
}

type JobSearchallReadResponse struct {
	ContentType string
	StatusCode  int64
}
