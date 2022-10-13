package shared

type Message struct {
	Action            *ActionEnum `json:"Action"`
	Body              *string     `json:"Body"`
	ImageIconURL      *string     `json:"ImageIconUrl"`
	ImageSmallIconURL *string     `json:"ImageSmallIconUrl"`
	ImageURL          *string     `json:"ImageUrl"`
	JSONBody          *string     `json:"JsonBody"`
	MediaURL          *string     `json:"MediaUrl"`
	RawContent        *string     `json:"RawContent"`
	SilentPush        *bool       `json:"SilentPush"`
	TimeToLive        *int64      `json:"TimeToLive"`
	Title             *string     `json:"Title"`
	URL               *string     `json:"Url"`
}
