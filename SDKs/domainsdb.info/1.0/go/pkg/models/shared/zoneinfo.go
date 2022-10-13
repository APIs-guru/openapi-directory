package shared

type ZoneInfo struct {
	Description []string `json:"description"`
	InBundles   []string `json:"in_bundles"`
	Includes    []string `json:"includes"`
	Type        string   `json:"type"`
	Zone        string   `json:"zone"`
}
