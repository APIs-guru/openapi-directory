package shared

import (
	"time"
)

type RoomDataTypeEnum string

const (
	RoomDataTypeEnumRoom RoomDataTypeEnum = "room"
)

type RoomData struct {
	Children                  []RoomData        `json:"children"`
	CntAdmins                 *int32            `json:"cntAdmins"`
	CntDownloadShares         *int32            `json:"cntDownloadShares"`
	CntUploadShares           *int32            `json:"cntUploadShares"`
	CntUsers                  *int32            `json:"cntUsers"`
	CreatedAt                 *time.Time        `json:"createdAt"`
	CreatedBy                 *UserInfo         `json:"createdBy"`
	HasRecycleBin             bool              `json:"hasRecycleBin"`
	ID                        int64             `json:"id"`
	IsEncrypted               bool              `json:"isEncrypted"`
	IsFavorite                *bool             `json:"isFavorite"`
	IsGranted                 bool              `json:"isGranted"`
	Name                      string            `json:"name"`
	ParentID                  *int64            `json:"parentId"`
	Permissions               *NodePermissions  `json:"permissions"`
	Quota                     *int64            `json:"quota"`
	RecycleBinRetentionPeriod int32             `json:"recycleBinRetentionPeriod"`
	Size                      *int64            `json:"size"`
	Type                      *RoomDataTypeEnum `json:"type"`
	UpdatedAt                 *time.Time        `json:"updatedAt"`
	UpdatedBy                 *UserInfo         `json:"updatedBy"`
}
