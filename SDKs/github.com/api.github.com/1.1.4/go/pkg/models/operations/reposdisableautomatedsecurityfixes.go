package operations

type ReposDisableAutomatedSecurityFixesPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposDisableAutomatedSecurityFixesRequest struct {
	PathParams ReposDisableAutomatedSecurityFixesPathParams
}

type ReposDisableAutomatedSecurityFixesResponse struct {
	ContentType string
	StatusCode  int64
}
