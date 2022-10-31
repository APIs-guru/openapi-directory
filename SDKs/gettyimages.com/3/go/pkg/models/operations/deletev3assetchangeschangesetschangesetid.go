package operations

type DeleteV3AssetChangesChangeSetsChangeSetIDPathParams struct {
	ChangeSetID int64 `pathParam:"style=simple,explode=false,name=change-set-id"`
}

type DeleteV3AssetChangesChangeSetsChangeSetIDRequest struct {
	PathParams DeleteV3AssetChangesChangeSetsChangeSetIDPathParams
}

type DeleteV3AssetChangesChangeSetsChangeSetIDResponse struct {
	ContentType string
	StatusCode  int64
}
