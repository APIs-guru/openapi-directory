package operations

type DeploymentsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeploymentsDeleteRequest struct {
	PathParams DeploymentsDeletePathParams
}

type DeploymentsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
