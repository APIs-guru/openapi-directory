package operations

type CompanySearchReadPathParams struct {
	CompanyName string `pathParam:"style=simple,explode=false,name=company_name"`
}

type CompanySearchReadRequest struct {
	PathParams CompanySearchReadPathParams
}

type CompanySearchReadResponse struct {
	ContentType string
	StatusCode  int64
}
