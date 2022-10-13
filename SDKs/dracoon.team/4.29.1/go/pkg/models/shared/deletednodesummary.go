package shared

import (
	"time"
)

type DeletedNodeSummaryTypeEnum string

const (
	DeletedNodeSummaryTypeEnumFolder DeletedNodeSummaryTypeEnum = "folder"
	DeletedNodeSummaryTypeEnumFile   DeletedNodeSummaryTypeEnum = "file"
)

type DeletedNodeSummary struct {
	CntVersions           int32                      `json:"cntVersions"`
	FirstDeletedAt        time.Time                  `json:"firstDeletedAt"`
	LastDeletedAt         time.Time                  `json:"lastDeletedAt"`
	LastDeletedNodeID     int64                      `json:"lastDeletedNodeId"`
	Name                  string                     `json:"name"`
	ParentID              int64                      `json:"parentId"`
	ParentPath            string                     `json:"parentPath"`
	TimestampCreation     *time.Time                 `json:"timestampCreation"`
	TimestampModification *time.Time                 `json:"timestampModification"`
	Type                  DeletedNodeSummaryTypeEnum `json:"type"`
}
