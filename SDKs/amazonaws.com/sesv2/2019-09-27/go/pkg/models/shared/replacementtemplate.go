package shared

// ReplacementTemplate
// An object which contains <code>ReplacementTemplateData</code> to be used for a specific <code>BulkEmailEntry</code>.
type ReplacementTemplate struct {
	ReplacementTemplateData *string `json:"ReplacementTemplateData,omitempty"`
}
