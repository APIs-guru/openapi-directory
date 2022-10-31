package shared

type ZoneInfo struct {
	Description []string `json:"description,omitempty"`
	InBundles   []string `json:"in_bundles,omitempty"`
	Includes    []string `json:"includes,omitempty"`
	Type        string   `json:"type"`
	Zone        string   `json:"zone"`
}
