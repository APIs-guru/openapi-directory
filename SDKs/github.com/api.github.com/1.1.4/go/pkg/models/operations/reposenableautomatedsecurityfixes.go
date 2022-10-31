package operations

type ReposEnableAutomatedSecurityFixesPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposEnableAutomatedSecurityFixesRequest struct {
	PathParams ReposEnableAutomatedSecurityFixesPathParams
}

type ReposEnableAutomatedSecurityFixesResponse struct {
	ContentType string
	StatusCode  int64
}
