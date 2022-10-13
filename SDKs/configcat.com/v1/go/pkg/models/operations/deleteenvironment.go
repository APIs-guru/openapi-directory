package operations

type DeleteEnvironmentPathParams struct {
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
}

type DeleteEnvironmentRequest struct {
	PathParams DeleteEnvironmentPathParams
}

type DeleteEnvironmentResponse struct {
	ContentType string
	StatusCode  int64
}
