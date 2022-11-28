package shared

// FolderConfiguration
// The configuration applied to an organization's folders by its retention policy.
type FolderConfiguration struct {
	Action RetentionActionEnum `json:"Action"`
	Name   FolderNameEnum      `json:"Name"`
	Period *int64              `json:"Period,omitempty"`
}
