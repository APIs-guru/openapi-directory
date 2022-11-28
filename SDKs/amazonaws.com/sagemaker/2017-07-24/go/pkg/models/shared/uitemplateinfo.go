package shared

// UITemplateInfo
// Container for user interface template information.
type UITemplateInfo struct {
	ContentSha256 *string `json:"ContentSha256,omitempty"`
	URL           *string `json:"Url,omitempty"`
}
