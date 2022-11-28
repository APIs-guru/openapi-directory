package shared

import (
	"time"
)

// Release
// A release.
type Release struct {
	Assets          []ReleaseAsset  `json:"assets"`
	AssetsURL       string          `json:"assets_url"`
	Author          SimpleUser      `json:"author"`
	Body            *string         `json:"body,omitempty"`
	BodyHTML        *string         `json:"body_html,omitempty"`
	BodyText        *string         `json:"body_text,omitempty"`
	CreatedAt       time.Time       `json:"created_at"`
	Draft           bool            `json:"draft"`
	HTMLURL         string          `json:"html_url"`
	ID              int64           `json:"id"`
	Name            string          `json:"name"`
	NodeID          string          `json:"node_id"`
	Prerelease      bool            `json:"prerelease"`
	PublishedAt     time.Time       `json:"published_at"`
	Reactions       *ReactionRollup `json:"reactions,omitempty"`
	TagName         string          `json:"tag_name"`
	TarballURL      string          `json:"tarball_url"`
	TargetCommitish string          `json:"target_commitish"`
	UploadURL       string          `json:"upload_url"`
	URL             string          `json:"url"`
	ZipballURL      string          `json:"zipball_url"`
}
