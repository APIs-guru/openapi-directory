package operations

type Destiny2SearchDestinyEntitiesPathParams struct {
	SearchTerm string `pathParam:"style=simple,explode=false,name=searchTerm"`
	Type       string `pathParam:"style=simple,explode=false,name=type"`
}

type Destiny2SearchDestinyEntitiesQueryParams struct {
	Page *int32 `queryParam:"style=form,explode=true,name=page"`
}

type Destiny2SearchDestinyEntitiesRequest struct {
	PathParams  Destiny2SearchDestinyEntitiesPathParams
	QueryParams Destiny2SearchDestinyEntitiesQueryParams
}

type Destiny2SearchDestinyEntitiesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
