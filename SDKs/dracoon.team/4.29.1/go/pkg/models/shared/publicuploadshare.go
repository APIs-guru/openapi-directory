package shared

import (
	"time"
)

type PublicUploadShare struct {
	CreatedAt             time.Time                `json:"createdAt"`
	CreatorName           string                   `json:"creatorName"`
	CreatorUsername       *string                  `json:"creatorUsername"`
	ExpireAt              *time.Time               `json:"expireAt"`
	IsEncrypted           *bool                    `json:"isEncrypted"`
	IsProtected           bool                     `json:"isProtected"`
	MaxSize               *float64                 `json:"maxSize"`
	MaxSlots              int32                    `json:"maxSlots"`
	Name                  *string                  `json:"name"`
	Notes                 *string                  `json:"notes"`
	RemainingSize         *int64                   `json:"remainingSize"`
	RemainingSlots        *int32                   `json:"remainingSlots"`
	ShowUploadedFiles     *bool                    `json:"showUploadedFiles"`
	UploadedFiles         []PublicUploadedFileData `json:"uploadedFiles"`
	UserUserPublicKeyList *UserUserPublicKeyList   `json:"userUserPublicKeyList"`
}
