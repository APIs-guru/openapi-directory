package operations

import (
	"openapi/pkg/models/shared"
)

type CollectionGetCollectionMetaPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type CollectionGetCollectionMetaRequest struct {
	PathParams CollectionGetCollectionMetaPathParams
}

type CollectionGetCollectionMetaResponse struct {
	BigOvenModelApi2CollectionInfo *shared.BigOvenModelApi2CollectionInfo
	Body                           []byte
	ContentType                    string
	StatusCode                     int64
}
