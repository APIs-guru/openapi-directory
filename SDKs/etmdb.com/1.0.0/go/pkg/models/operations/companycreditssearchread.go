package operations

type CompanyCreditsSearchReadPathParams struct {
	MovieTitle string `pathParam:"style=simple,explode=false,name=movie_title"`
}

type CompanyCreditsSearchReadRequest struct {
	PathParams CompanyCreditsSearchReadPathParams
}

type CompanyCreditsSearchReadResponse struct {
	ContentType string
	StatusCode  int64
}
