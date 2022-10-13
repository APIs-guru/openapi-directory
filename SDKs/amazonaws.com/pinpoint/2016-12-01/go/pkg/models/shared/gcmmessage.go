package shared

type GcmMessage struct {
	Action                *ActionEnum         `json:"Action"`
	Body                  *string             `json:"Body"`
	CollapseKey           *string             `json:"CollapseKey"`
	Data                  map[string]string   `json:"Data"`
	IconReference         *string             `json:"IconReference"`
	ImageIconURL          *string             `json:"ImageIconUrl"`
	ImageURL              *string             `json:"ImageUrl"`
	Priority              *string             `json:"Priority"`
	RawContent            *string             `json:"RawContent"`
	RestrictedPackageName *string             `json:"RestrictedPackageName"`
	SilentPush            *bool               `json:"SilentPush"`
	SmallImageIconURL     *string             `json:"SmallImageIconUrl"`
	Sound                 *string             `json:"Sound"`
	Substitutions         map[string][]string `json:"Substitutions"`
	TimeToLive            *int64              `json:"TimeToLive"`
	Title                 *string             `json:"Title"`
	URL                   *string             `json:"Url"`
}
