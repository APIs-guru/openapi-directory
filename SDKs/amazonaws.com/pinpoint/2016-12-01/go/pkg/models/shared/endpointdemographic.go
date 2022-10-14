package shared

type EndpointDemographic struct {
	AppVersion      *string `json:"AppVersion,omitempty"`
	Locale          *string `json:"Locale,omitempty"`
	Make            *string `json:"Make,omitempty"`
	Model           *string `json:"Model,omitempty"`
	ModelVersion    *string `json:"ModelVersion,omitempty"`
	Platform        *string `json:"Platform,omitempty"`
	PlatformVersion *string `json:"PlatformVersion,omitempty"`
	Timezone        *string `json:"Timezone,omitempty"`
}
