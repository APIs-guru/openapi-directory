package shared

type PackageSearchResult struct {
	Package string         `json:"package"`
	Results []SearchResult `json:"results"`
}
