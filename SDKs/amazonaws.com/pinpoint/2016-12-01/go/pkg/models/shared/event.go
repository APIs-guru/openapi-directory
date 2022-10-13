package shared

type Event struct {
	AppPackageName   *string            `json:"AppPackageName"`
	AppTitle         *string            `json:"AppTitle"`
	AppVersionCode   *string            `json:"AppVersionCode"`
	Attributes       map[string]string  `json:"Attributes"`
	ClientSdkVersion *string            `json:"ClientSdkVersion"`
	EventType        string             `json:"EventType"`
	Metrics          map[string]float64 `json:"Metrics"`
	SdkName          *string            `json:"SdkName"`
	Session          *Session           `json:"Session"`
	Timestamp        string             `json:"Timestamp"`
}
