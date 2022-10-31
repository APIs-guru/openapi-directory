package shared



type AffiliateVideo struct {
    Caption *string `json:"caption,omitempty"`
    ClipLength *string `json:"clip_length,omitempty"`
    DestinationURL *string `json:"destination_url,omitempty"`
    ID *string `json:"id,omitempty"`
    PreviewUrls *AffiliateVideoUrls `json:"preview_urls,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

