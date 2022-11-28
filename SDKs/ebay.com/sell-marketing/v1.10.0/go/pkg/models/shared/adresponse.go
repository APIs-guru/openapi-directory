package shared

// AdResponse
// This type defines the fields returned in an ad response.
type AdResponse struct {
	AdID       *string `json:"adId,omitempty"`
	Errors     []Error `json:"errors,omitempty"`
	Href       *string `json:"href,omitempty"`
	ListingID  *string `json:"listingId,omitempty"`
	StatusCode *int32  `json:"statusCode,omitempty"`
}
