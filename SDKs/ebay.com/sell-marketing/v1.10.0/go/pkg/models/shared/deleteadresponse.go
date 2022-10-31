package shared

type DeleteAdResponse struct {
	AdID       *string `json:"adId,omitempty"`
	Errors     []Error `json:"errors,omitempty"`
	ListingID  *string `json:"listingId,omitempty"`
	StatusCode *int32  `json:"statusCode,omitempty"`
}
