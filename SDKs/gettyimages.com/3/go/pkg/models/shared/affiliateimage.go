package shared

type AffiliateImage struct {
	Caption        *string             `json:"caption,omitempty"`
	DestinationURL *string             `json:"destination_url,omitempty"`
	ID             *string             `json:"id,omitempty"`
	PreviewUrls    *AffiliateImageUrls `json:"preview_urls,omitempty"`
	Title          *string             `json:"title,omitempty"`
}
