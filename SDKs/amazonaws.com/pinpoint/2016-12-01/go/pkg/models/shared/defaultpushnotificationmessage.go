package shared

type DefaultPushNotificationMessage struct {
	Action        *ActionEnum         `json:"Action"`
	Body          *string             `json:"Body"`
	Data          map[string]string   `json:"Data"`
	SilentPush    *bool               `json:"SilentPush"`
	Substitutions map[string][]string `json:"Substitutions"`
	Title         *string             `json:"Title"`
	URL           *string             `json:"Url"`
}
