package operations

type CampaignListQueryParams struct {
	IncludeArchived *string `queryParam:"style=form,explode=true,name=include_archived"`
	LastEditTimeGt  *string `queryParam:"style=form,explode=true,name=last_edit.time[gt]"`
	Page            *string `queryParam:"style=form,explode=true,name=page"`
	SortDirection   *string `queryParam:"style=form,explode=true,name=sort_direction"`
}

type CampaignListRequest struct {
	QueryParams CampaignListQueryParams
}

type CampaignListResponse struct {
	ContentType string
	StatusCode  int64
}
