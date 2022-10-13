package shared

type AffiliateImage struct {
	Caption        *string             `json:"caption"`
	DestinationURL *string             `json:"destination_url"`
	ID             *string             `json:"id"`
	PreviewUrls    *AffiliateImageUrls `json:"preview_urls"`
	Title          *string             `json:"title"`
}
