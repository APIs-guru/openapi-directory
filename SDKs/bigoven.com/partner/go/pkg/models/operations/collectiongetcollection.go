package operations

import (
	"openapi/pkg/models/shared"
)

type CollectionGetCollectionPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type CollectionGetCollectionQueryParams struct {
	Pg                *int32  `queryParam:"style=form,explode=true,name=pg"`
	Rpp               *int32  `queryParam:"style=form,explode=true,name=rpp"`
	SessionForLogging *string `queryParam:"style=form,explode=true,name=sessionForLogging"`
	Test              *bool   `queryParam:"style=form,explode=true,name=test"`
}

type CollectionGetCollectionRequest struct {
	PathParams  CollectionGetCollectionPathParams
	QueryParams CollectionGetCollectionQueryParams
}

type CollectionGetCollectionResponse struct {
	BigOvenModelApi2RecipeSearchResult *shared.BigOvenModelApi2RecipeSearchResult
	Body                               []byte
	ContentType                        string
	StatusCode                         int64
}
