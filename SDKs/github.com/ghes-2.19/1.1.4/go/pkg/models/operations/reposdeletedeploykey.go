package operations

type ReposDeleteDeployKeyPathParams struct {
	KeyID int64  `pathParam:"style=simple,explode=false,name=key_id"`
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposDeleteDeployKeyRequest struct {
	PathParams ReposDeleteDeployKeyPathParams
}

type ReposDeleteDeployKeyResponse struct {
	ContentType string
	StatusCode  int64
}
