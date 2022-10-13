package shared

import (
	"time"
)

type PublicDownloadShare struct {
	CreatedAt           time.Time            `json:"createdAt"`
	CreatorName         string               `json:"creatorName"`
	CreatorUsername     *string              `json:"creatorUsername"`
	ExpireAt            *time.Time           `json:"expireAt"`
	FileKey             *FileKey             `json:"fileKey"`
	FileName            string               `json:"fileName"`
	HasDownloadLimit    bool                 `json:"hasDownloadLimit"`
	IsEncrypted         *bool                `json:"isEncrypted"`
	IsProtected         bool                 `json:"isProtected"`
	LimitReached        bool                 `json:"limitReached"`
	MediaType           string               `json:"mediaType"`
	Name                *string              `json:"name"`
	Notes               *string              `json:"notes"`
	PrivateKeyContainer *PrivateKeyContainer `json:"privateKeyContainer"`
	Size                int64                `json:"size"`
}
