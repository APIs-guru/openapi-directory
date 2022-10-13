package shared

type CreateAppRequest struct {
	AppName         string        `json:"AppName"`
	AppType         AppTypeEnum   `json:"AppType"`
	DomainID        string        `json:"DomainId"`
	ResourceSpec    *ResourceSpec `json:"ResourceSpec"`
	Tags            []Tag         `json:"Tags"`
	UserProfileName string        `json:"UserProfileName"`
}
