package operations

type NewsFeedCardsListQueryParams struct {
	IncludeArchived *string `queryParam:"style=form,explode=true,name=include_archived"`
	Page            *string `queryParam:"style=form,explode=true,name=page"`
	SortDirection   *string `queryParam:"style=form,explode=true,name=sort_direction"`
}

type NewsFeedCardsListRequest struct {
	QueryParams NewsFeedCardsListQueryParams
}

type NewsFeedCardsListResponse struct {
	ContentType string
	StatusCode  int64
}
