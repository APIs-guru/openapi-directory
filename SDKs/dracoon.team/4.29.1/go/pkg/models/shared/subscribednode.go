package shared

type SubscribedNodeTypeEnum string

const (
	SubscribedNodeTypeEnumRoom   SubscribedNodeTypeEnum = "room"
	SubscribedNodeTypeEnumFolder SubscribedNodeTypeEnum = "folder"
	SubscribedNodeTypeEnumFile   SubscribedNodeTypeEnum = "file"
)

type SubscribedNode struct {
	AuthParentID *int64                  `json:"authParentId"`
	ID           int64                   `json:"id"`
	Type         *SubscribedNodeTypeEnum `json:"type"`
}
