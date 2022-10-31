package shared

import (
	"time"
)

type RoomDataTypeEnum string

const (
	RoomDataTypeEnumRoom RoomDataTypeEnum = "room"
)

type RoomData struct {
	Children                  []RoomData        `json:"children,omitempty"`
	CntAdmins                 *int32            `json:"cntAdmins,omitempty"`
	CntDownloadShares         *int32            `json:"cntDownloadShares,omitempty"`
	CntUploadShares           *int32            `json:"cntUploadShares,omitempty"`
	CntUsers                  *int32            `json:"cntUsers,omitempty"`
	CreatedAt                 *time.Time        `json:"createdAt,omitempty"`
	CreatedBy                 *UserInfo         `json:"createdBy,omitempty"`
	HasRecycleBin             bool              `json:"hasRecycleBin"`
	ID                        int64             `json:"id"`
	IsEncrypted               bool              `json:"isEncrypted"`
	IsFavorite                *bool             `json:"isFavorite,omitempty"`
	IsGranted                 bool              `json:"isGranted"`
	Name                      string            `json:"name"`
	ParentID                  *int64            `json:"parentId,omitempty"`
	Permissions               *NodePermissions  `json:"permissions,omitempty"`
	Quota                     *int64            `json:"quota,omitempty"`
	RecycleBinRetentionPeriod int32             `json:"recycleBinRetentionPeriod"`
	Size                      *int64            `json:"size,omitempty"`
	Type                      *RoomDataTypeEnum `json:"type,omitempty"`
	UpdatedAt                 *time.Time        `json:"updatedAt,omitempty"`
	UpdatedBy                 *UserInfo         `json:"updatedBy,omitempty"`
}
