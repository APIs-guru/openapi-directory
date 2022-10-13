package shared

type CampaignPagedCollection struct {
	Campaigns []Campaign `json:"campaigns"`
	Href      *string    `json:"href"`
	Limit     *int32     `json:"limit"`
	Next      *string    `json:"next"`
	Offset    *int32     `json:"offset"`
	Prev      *string    `json:"prev"`
	Total     *int32     `json:"total"`
}
