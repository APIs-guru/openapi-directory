package shared

// SearchResult
// A search result matching the specified query. You can use sources.debian.org to view the file contents. See https://github.com/Debian/dcs/blob/master/cmd/dcs-web/show/show.go for how to construct a sources.debian.org URL from a search result.
type SearchResult struct {
	Context       string   `json:"context"`
	ContextAfter  []string `json:"context_after,omitempty"`
	ContextBefore []string `json:"context_before,omitempty"`
	Line          int64    `json:"line"`
	Package       string   `json:"package"`
	Path          string   `json:"path"`
}
