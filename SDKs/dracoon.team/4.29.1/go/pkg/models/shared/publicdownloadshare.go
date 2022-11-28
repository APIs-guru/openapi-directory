package shared

import (
	"time"
)

// PublicDownloadShareOutput
// Download Share information
type PublicDownloadShareOutput struct {
	CreatedAt           time.Time                  `json:"createdAt"`
	CreatorName         string                     `json:"creatorName"`
	CreatorUsername     *string                    `json:"creatorUsername,omitempty"`
	ExpireAt            *time.Time                 `json:"expireAt,omitempty"`
	FileKey             *FileKey                   `json:"fileKey,omitempty"`
	FileName            string                     `json:"fileName"`
	HasDownloadLimit    bool                       `json:"hasDownloadLimit"`
	IsEncrypted         *bool                      `json:"isEncrypted,omitempty"`
	IsProtected         bool                       `json:"isProtected"`
	LimitReached        bool                       `json:"limitReached"`
	MediaType           string                     `json:"mediaType"`
	Name                *string                    `json:"name,omitempty"`
	Notes               *string                    `json:"notes,omitempty"`
	PrivateKeyContainer *PrivateKeyContainerOutput `json:"privateKeyContainer,omitempty"`
	Size                int64                      `json:"size"`
}
