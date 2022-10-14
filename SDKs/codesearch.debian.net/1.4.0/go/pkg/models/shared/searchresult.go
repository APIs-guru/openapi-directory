package shared

type SearchResult struct {
	Context       string   `json:"context"`
	ContextAfter  []string `json:"context_after,omitempty"`
	ContextBefore []string `json:"context_before,omitempty"`
	Line          int64    `json:"line"`
	Package       string   `json:"package"`
	Path          string   `json:"path"`
}
