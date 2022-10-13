package shared

type ApnsMessage struct {
	ApnsPushType                  *string             `json:"APNSPushType"`
	Action                        *ActionEnum         `json:"Action"`
	Badge                         *int64              `json:"Badge"`
	Body                          *string             `json:"Body"`
	Category                      *string             `json:"Category"`
	CollapseID                    *string             `json:"CollapseId"`
	Data                          map[string]string   `json:"Data"`
	MediaURL                      *string             `json:"MediaUrl"`
	PreferredAuthenticationMethod *string             `json:"PreferredAuthenticationMethod"`
	Priority                      *string             `json:"Priority"`
	RawContent                    *string             `json:"RawContent"`
	SilentPush                    *bool               `json:"SilentPush"`
	Sound                         *string             `json:"Sound"`
	Substitutions                 map[string][]string `json:"Substitutions"`
	ThreadID                      *string             `json:"ThreadId"`
	TimeToLive                    *int64              `json:"TimeToLive"`
	Title                         *string             `json:"Title"`
	URL                           *string             `json:"Url"`
}
