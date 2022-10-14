package shared

import (
	"time"
)

type NodeTypeEnum string

const (
	NodeTypeEnumRoom   NodeTypeEnum = "room"
	NodeTypeEnumFolder NodeTypeEnum = "folder"
	NodeTypeEnumFile   NodeTypeEnum = "file"
)

type Node struct {
	AuthParentID              *int64           `json:"authParentId,omitempty"`
	BranchVersion             *int64           `json:"branchVersion,omitempty"`
	Children                  []Node           `json:"children,omitempty"`
	Classification            *int32           `json:"classification,omitempty"`
	CntAdmins                 *int32           `json:"cntAdmins,omitempty"`
	CntChildren               *int32           `json:"cntChildren,omitempty"`
	CntComments               *int32           `json:"cntComments,omitempty"`
	CntDeletedVersions        *int32           `json:"cntDeletedVersions,omitempty"`
	CntDownloadShares         *int32           `json:"cntDownloadShares,omitempty"`
	CntFiles                  *int32           `json:"cntFiles,omitempty"`
	CntFolders                *int32           `json:"cntFolders,omitempty"`
	CntRooms                  *int32           `json:"cntRooms,omitempty"`
	CntUploadShares           *int32           `json:"cntUploadShares,omitempty"`
	CntUsers                  *int32           `json:"cntUsers,omitempty"`
	CreatedAt                 *time.Time       `json:"createdAt,omitempty"`
	CreatedBy                 *UserInfo        `json:"createdBy,omitempty"`
	EncryptionInfo            *EncryptionInfo  `json:"encryptionInfo,omitempty"`
	ExpireAt                  *time.Time       `json:"expireAt,omitempty"`
	FileType                  *string          `json:"fileType,omitempty"`
	HasActivitiesLog          *bool            `json:"hasActivitiesLog,omitempty"`
	HasRecycleBin             *bool            `json:"hasRecycleBin,omitempty"`
	Hash                      *string          `json:"hash,omitempty"`
	ID                        int64            `json:"id"`
	InheritPermissions        *bool            `json:"inheritPermissions,omitempty"`
	IsBrowsable               *bool            `json:"isBrowsable,omitempty"`
	IsEncrypted               *bool            `json:"isEncrypted,omitempty"`
	IsFavorite                *bool            `json:"isFavorite,omitempty"`
	MediaToken                *string          `json:"mediaToken,omitempty"`
	MediaType                 *string          `json:"mediaType,omitempty"`
	Name                      string           `json:"name"`
	Notes                     *string          `json:"notes,omitempty"`
	ParentID                  *int64           `json:"parentId,omitempty"`
	ParentPath                *string          `json:"parentPath,omitempty"`
	Permissions               *NodePermissions `json:"permissions,omitempty"`
	Quota                     *int64           `json:"quota,omitempty"`
	RecycleBinRetentionPeriod *int32           `json:"recycleBinRetentionPeriod,omitempty"`
	Size                      *int64           `json:"size,omitempty"`
	TimestampCreation         *time.Time       `json:"timestampCreation,omitempty"`
	TimestampModification     *time.Time       `json:"timestampModification,omitempty"`
	Type                      NodeTypeEnum     `json:"type"`
	UpdatedAt                 *time.Time       `json:"updatedAt,omitempty"`
	UpdatedBy                 *UserInfo        `json:"updatedBy,omitempty"`
}
