package shared

// ReplacementEmailContent
// The <code>ReplaceEmailContent</code> object to be used for a specific <code>BulkEmailEntry</code>. The <code>ReplacementTemplate</code> can be specified within this object.
type ReplacementEmailContent struct {
	ReplacementTemplate *ReplacementTemplate `json:"ReplacementTemplate,omitempty"`
}
