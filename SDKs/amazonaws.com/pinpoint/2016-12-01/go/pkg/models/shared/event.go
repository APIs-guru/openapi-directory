package shared

type Event struct {
	AppPackageName   *string            `json:"AppPackageName,omitempty"`
	AppTitle         *string            `json:"AppTitle,omitempty"`
	AppVersionCode   *string            `json:"AppVersionCode,omitempty"`
	Attributes       map[string]string  `json:"Attributes,omitempty"`
	ClientSdkVersion *string            `json:"ClientSdkVersion,omitempty"`
	EventType        string             `json:"EventType"`
	Metrics          map[string]float64 `json:"Metrics,omitempty"`
	SdkName          *string            `json:"SdkName,omitempty"`
	Session          *Session           `json:"Session,omitempty"`
	Timestamp        string             `json:"Timestamp"`
}
