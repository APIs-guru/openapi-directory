package shared

import (
	"time"
)

type DeletedNodeTypeEnum string

const (
	DeletedNodeTypeEnumFolder DeletedNodeTypeEnum = "folder"
	DeletedNodeTypeEnumFile   DeletedNodeTypeEnum = "file"
)

type DeletedNode struct {
	AccessedAt     *time.Time          `json:"accessedAt"`
	Classification *int32              `json:"classification"`
	CreatedAt      *time.Time          `json:"createdAt"`
	CreatedBy      *UserInfo           `json:"createdBy"`
	DeletedAt      *time.Time          `json:"deletedAt"`
	DeletedBy      *UserInfo           `json:"deletedBy"`
	ExpireAt       *time.Time          `json:"expireAt"`
	ID             *int64              `json:"id"`
	IsEncrypted    *bool               `json:"isEncrypted"`
	Name           string              `json:"name"`
	Notes          *string             `json:"notes"`
	ParentID       int64               `json:"parentId"`
	ParentPath     string              `json:"parentPath"`
	Size           *int64              `json:"size"`
	Type           DeletedNodeTypeEnum `json:"type"`
	UpdatedAt      *time.Time          `json:"updatedAt"`
	UpdatedBy      *UserInfo           `json:"updatedBy"`
}
