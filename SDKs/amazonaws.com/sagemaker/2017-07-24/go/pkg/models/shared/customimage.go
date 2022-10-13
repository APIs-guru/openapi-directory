package shared

type CustomImage struct {
	AppImageConfigName string `json:"AppImageConfigName"`
	ImageName          string `json:"ImageName"`
	ImageVersionNumber *int64 `json:"ImageVersionNumber"`
}
