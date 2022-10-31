package shared

import (
"time")


type DeletedNodeTypeEnum string

const (
    DeletedNodeTypeEnumFolder DeletedNodeTypeEnum = "folder"
DeletedNodeTypeEnumFile DeletedNodeTypeEnum = "file"
)


type DeletedNode struct {
    AccessedAt *time.Time `json:"accessedAt,omitempty"`
    Classification *int32 `json:"classification,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    CreatedBy *UserInfo `json:"createdBy,omitempty"`
    DeletedAt *time.Time `json:"deletedAt,omitempty"`
    DeletedBy *UserInfo `json:"deletedBy,omitempty"`
    ExpireAt *time.Time `json:"expireAt,omitempty"`
    ID *int64 `json:"id,omitempty"`
    IsEncrypted *bool `json:"isEncrypted,omitempty"`
    Name string `json:"name"`
    Notes *string `json:"notes,omitempty"`
    ParentID int64 `json:"parentId"`
    ParentPath string `json:"parentPath"`
    Size *int64 `json:"size,omitempty"`
    Type DeletedNodeTypeEnum `json:"type"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    UpdatedBy *UserInfo `json:"updatedBy,omitempty"`
    
}

