package operations

type ReposRemoveStatusCheckProtectionPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposRemoveStatusCheckProtectionRequest struct {
	PathParams ReposRemoveStatusCheckProtectionPathParams
}

type ReposRemoveStatusCheckProtectionResponse struct {
	ContentType string
	StatusCode  int64
}
