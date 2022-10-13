package shared

type AdmMessage struct {
	Action            *ActionEnum         `json:"Action"`
	Body              *string             `json:"Body"`
	ConsolidationKey  *string             `json:"ConsolidationKey"`
	Data              map[string]string   `json:"Data"`
	ExpiresAfter      *string             `json:"ExpiresAfter"`
	IconReference     *string             `json:"IconReference"`
	ImageIconURL      *string             `json:"ImageIconUrl"`
	ImageURL          *string             `json:"ImageUrl"`
	Md5               *string             `json:"MD5"`
	RawContent        *string             `json:"RawContent"`
	SilentPush        *bool               `json:"SilentPush"`
	SmallImageIconURL *string             `json:"SmallImageIconUrl"`
	Sound             *string             `json:"Sound"`
	Substitutions     map[string][]string `json:"Substitutions"`
	Title             *string             `json:"Title"`
	URL               *string             `json:"Url"`
}
