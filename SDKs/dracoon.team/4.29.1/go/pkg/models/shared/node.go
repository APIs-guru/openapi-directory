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
	AuthParentID              *int64           `json:"authParentId"`
	BranchVersion             *int64           `json:"branchVersion"`
	Children                  []Node           `json:"children"`
	Classification            *int32           `json:"classification"`
	CntAdmins                 *int32           `json:"cntAdmins"`
	CntChildren               *int32           `json:"cntChildren"`
	CntComments               *int32           `json:"cntComments"`
	CntDeletedVersions        *int32           `json:"cntDeletedVersions"`
	CntDownloadShares         *int32           `json:"cntDownloadShares"`
	CntFiles                  *int32           `json:"cntFiles"`
	CntFolders                *int32           `json:"cntFolders"`
	CntRooms                  *int32           `json:"cntRooms"`
	CntUploadShares           *int32           `json:"cntUploadShares"`
	CntUsers                  *int32           `json:"cntUsers"`
	CreatedAt                 *time.Time       `json:"createdAt"`
	CreatedBy                 *UserInfo        `json:"createdBy"`
	EncryptionInfo            *EncryptionInfo  `json:"encryptionInfo"`
	ExpireAt                  *time.Time       `json:"expireAt"`
	FileType                  *string          `json:"fileType"`
	HasActivitiesLog          *bool            `json:"hasActivitiesLog"`
	HasRecycleBin             *bool            `json:"hasRecycleBin"`
	Hash                      *string          `json:"hash"`
	ID                        int64            `json:"id"`
	InheritPermissions        *bool            `json:"inheritPermissions"`
	IsBrowsable               *bool            `json:"isBrowsable"`
	IsEncrypted               *bool            `json:"isEncrypted"`
	IsFavorite                *bool            `json:"isFavorite"`
	MediaToken                *string          `json:"mediaToken"`
	MediaType                 *string          `json:"mediaType"`
	Name                      string           `json:"name"`
	Notes                     *string          `json:"notes"`
	ParentID                  *int64           `json:"parentId"`
	ParentPath                *string          `json:"parentPath"`
	Permissions               *NodePermissions `json:"permissions"`
	Quota                     *int64           `json:"quota"`
	RecycleBinRetentionPeriod *int32           `json:"recycleBinRetentionPeriod"`
	Size                      *int64           `json:"size"`
	TimestampCreation         *time.Time       `json:"timestampCreation"`
	TimestampModification     *time.Time       `json:"timestampModification"`
	Type                      NodeTypeEnum     `json:"type"`
	UpdatedAt                 *time.Time       `json:"updatedAt"`
	UpdatedBy                 *UserInfo        `json:"updatedBy"`
}
