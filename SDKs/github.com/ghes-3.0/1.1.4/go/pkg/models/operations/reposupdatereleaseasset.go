package operations

import (
	"openapi/pkg/models/shared"
)

type ReposUpdateReleaseAssetPathParams struct {
	AssetID int64  `pathParam:"style=simple,explode=false,name=asset_id"`
	Owner   string `pathParam:"style=simple,explode=false,name=owner"`
	Repo    string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposUpdateReleaseAssetRequestBody struct {
	Label *string `json:"label,omitempty"`
	Name  *string `json:"name,omitempty"`
	State *string `json:"state,omitempty"`
}

type ReposUpdateReleaseAssetRequest struct {
	PathParams ReposUpdateReleaseAssetPathParams
	Request    *ReposUpdateReleaseAssetRequestBody `request:"mediaType=application/json"`
}

type ReposUpdateReleaseAssetResponse struct {
	ContentType  string
	StatusCode   int64
	ReleaseAsset *shared.ReleaseAsset
}
