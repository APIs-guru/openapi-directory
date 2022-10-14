package shared

type ApnsMessage struct {
	ApnsPushType                  *string             `json:"APNSPushType,omitempty"`
	Action                        *ActionEnum         `json:"Action,omitempty"`
	Badge                         *int64              `json:"Badge,omitempty"`
	Body                          *string             `json:"Body,omitempty"`
	Category                      *string             `json:"Category,omitempty"`
	CollapseID                    *string             `json:"CollapseId,omitempty"`
	Data                          map[string]string   `json:"Data,omitempty"`
	MediaURL                      *string             `json:"MediaUrl,omitempty"`
	PreferredAuthenticationMethod *string             `json:"PreferredAuthenticationMethod,omitempty"`
	Priority                      *string             `json:"Priority,omitempty"`
	RawContent                    *string             `json:"RawContent,omitempty"`
	SilentPush                    *bool               `json:"SilentPush,omitempty"`
	Sound                         *string             `json:"Sound,omitempty"`
	Substitutions                 map[string][]string `json:"Substitutions,omitempty"`
	ThreadID                      *string             `json:"ThreadId,omitempty"`
	TimeToLive                    *int64              `json:"TimeToLive,omitempty"`
	Title                         *string             `json:"Title,omitempty"`
	URL                           *string             `json:"Url,omitempty"`
}
