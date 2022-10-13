package shared

type AdResponse struct {
	AdID       *string `json:"adId"`
	Errors     []Error `json:"errors"`
	Href       *string `json:"href"`
	ListingID  *string `json:"listingId"`
	StatusCode *int32  `json:"statusCode"`
}
