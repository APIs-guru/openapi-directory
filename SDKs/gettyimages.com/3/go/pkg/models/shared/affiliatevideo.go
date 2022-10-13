package shared

type AffiliateVideo struct {
	Caption        *string             `json:"caption"`
	ClipLength     *string             `json:"clip_length"`
	DestinationURL *string             `json:"destination_url"`
	ID             *string             `json:"id"`
	PreviewUrls    *AffiliateVideoUrls `json:"preview_urls"`
	Title          *string             `json:"title"`
}
