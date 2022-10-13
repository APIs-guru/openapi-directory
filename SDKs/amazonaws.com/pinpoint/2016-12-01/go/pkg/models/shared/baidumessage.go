package shared

type BaiduMessage struct {
	Action            *ActionEnum         `json:"Action"`
	Body              *string             `json:"Body"`
	Data              map[string]string   `json:"Data"`
	IconReference     *string             `json:"IconReference"`
	ImageIconURL      *string             `json:"ImageIconUrl"`
	ImageURL          *string             `json:"ImageUrl"`
	RawContent        *string             `json:"RawContent"`
	SilentPush        *bool               `json:"SilentPush"`
	SmallImageIconURL *string             `json:"SmallImageIconUrl"`
	Sound             *string             `json:"Sound"`
	Substitutions     map[string][]string `json:"Substitutions"`
	TimeToLive        *int64              `json:"TimeToLive"`
	Title             *string             `json:"Title"`
	URL               *string             `json:"Url"`
}
