package shared

type URLTargeting struct {
	ExcludedUrls []string `json:"excludedUrls"`
	TargetedUrls []string `json:"targetedUrls"`
}
