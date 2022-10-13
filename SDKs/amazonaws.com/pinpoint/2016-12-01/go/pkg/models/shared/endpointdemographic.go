package shared

type EndpointDemographic struct {
	AppVersion      *string `json:"AppVersion"`
	Locale          *string `json:"Locale"`
	Make            *string `json:"Make"`
	Model           *string `json:"Model"`
	ModelVersion    *string `json:"ModelVersion"`
	Platform        *string `json:"Platform"`
	PlatformVersion *string `json:"PlatformVersion"`
	Timezone        *string `json:"Timezone"`
}
