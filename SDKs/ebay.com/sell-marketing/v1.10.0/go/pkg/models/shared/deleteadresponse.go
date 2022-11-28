package shared

// DeleteAdResponse
// This type defines the fields returned in a delete-ad response.
type DeleteAdResponse struct {
	AdID       *string `json:"adId,omitempty"`
	Errors     []Error `json:"errors,omitempty"`
	ListingID  *string `json:"listingId,omitempty"`
	StatusCode *int32  `json:"statusCode,omitempty"`
}
