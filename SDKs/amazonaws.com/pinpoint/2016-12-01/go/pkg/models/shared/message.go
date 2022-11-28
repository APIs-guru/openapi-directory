package shared

// Message
// Specifies the content and settings for a push notification that's sent to recipients of a campaign.
type Message struct {
	Action            *ActionEnum `json:"Action,omitempty"`
	Body              *string     `json:"Body,omitempty"`
	ImageIconURL      *string     `json:"ImageIconUrl,omitempty"`
	ImageSmallIconURL *string     `json:"ImageSmallIconUrl,omitempty"`
	ImageURL          *string     `json:"ImageUrl,omitempty"`
	JSONBody          *string     `json:"JsonBody,omitempty"`
	MediaURL          *string     `json:"MediaUrl,omitempty"`
	RawContent        *string     `json:"RawContent,omitempty"`
	SilentPush        *bool       `json:"SilentPush,omitempty"`
	TimeToLive        *int64      `json:"TimeToLive,omitempty"`
	Title             *string     `json:"Title,omitempty"`
	URL               *string     `json:"Url,omitempty"`
}
