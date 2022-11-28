package shared

// BaiduMessage
// Specifies the settings for a one-time message that's sent directly to an endpoint through the Baidu (Baidu Cloud Push) channel.
type BaiduMessage struct {
	Action            *ActionEnum         `json:"Action,omitempty"`
	Body              *string             `json:"Body,omitempty"`
	Data              map[string]string   `json:"Data,omitempty"`
	IconReference     *string             `json:"IconReference,omitempty"`
	ImageIconURL      *string             `json:"ImageIconUrl,omitempty"`
	ImageURL          *string             `json:"ImageUrl,omitempty"`
	RawContent        *string             `json:"RawContent,omitempty"`
	SilentPush        *bool               `json:"SilentPush,omitempty"`
	SmallImageIconURL *string             `json:"SmallImageIconUrl,omitempty"`
	Sound             *string             `json:"Sound,omitempty"`
	Substitutions     map[string][]string `json:"Substitutions,omitempty"`
	TimeToLive        *int64              `json:"TimeToLive,omitempty"`
	Title             *string             `json:"Title,omitempty"`
	URL               *string             `json:"Url,omitempty"`
}
