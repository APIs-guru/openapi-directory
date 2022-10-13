package operations

type CampaignDetailsQueryParams struct {
	CampaignID *string `queryParam:"style=form,explode=true,name=campaign_id"`
}

type CampaignDetailsRequest struct {
	QueryParams CampaignDetailsQueryParams
}

type CampaignDetailsResponse struct {
	ContentType string
	StatusCode  int64
}
