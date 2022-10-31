package operations

type ReposDeleteReleasePathParams struct {
	Owner     string `pathParam:"style=simple,explode=false,name=owner"`
	ReleaseID int64  `pathParam:"style=simple,explode=false,name=release_id"`
	Repo      string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposDeleteReleaseRequest struct {
	PathParams ReposDeleteReleasePathParams
}

type ReposDeleteReleaseResponse struct {
	ContentType string
	StatusCode  int64
}
