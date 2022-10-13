package operations

import (
	"openapi/pkg/models/shared"
)

type CollectionsOnePathParams struct {
	EcosystemID string `pathParam:"style=simple,explode=false,name=ecosystem_id"`
	ID          string `pathParam:"style=simple,explode=false,name=id"`
}

type CollectionsOneRequest struct {
	PathParams CollectionsOnePathParams
}

type CollectionsOneResponse struct {
	ContentType           string
	GetCollectionResponse *shared.GetCollectionResponse
	StatusCode            int64
}
