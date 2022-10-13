package shared

type URITargeting struct {
	ExcludedUris []string `json:"excludedUris"`
	TargetedUris []string `json:"targetedUris"`
}
