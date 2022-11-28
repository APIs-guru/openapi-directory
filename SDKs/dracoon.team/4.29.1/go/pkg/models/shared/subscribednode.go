package shared

type SubscribedNodeTypeEnum string

const (
	SubscribedNodeTypeEnumRoom   SubscribedNodeTypeEnum = "room"
	SubscribedNodeTypeEnumFolder SubscribedNodeTypeEnum = "folder"
	SubscribedNodeTypeEnumFile   SubscribedNodeTypeEnum = "file"
)

// SubscribedNode
// Subscribed node information
type SubscribedNode struct {
	AuthParentID *int64                  `json:"authParentId,omitempty"`
	ID           int64                   `json:"id"`
	Type         *SubscribedNodeTypeEnum `json:"type,omitempty"`
}
