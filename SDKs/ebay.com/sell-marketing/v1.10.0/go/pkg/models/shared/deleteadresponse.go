package shared

type DeleteAdResponse struct {
	AdID       *string `json:"adId"`
	Errors     []Error `json:"errors"`
	ListingID  *string `json:"listingId"`
	StatusCode *int32  `json:"statusCode"`
}
