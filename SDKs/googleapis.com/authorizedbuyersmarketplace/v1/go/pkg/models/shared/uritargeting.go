package shared

type URITargeting struct {
	ExcludedUris []string `json:"excludedUris,omitempty"`
	TargetedUris []string `json:"targetedUris,omitempty"`
}
