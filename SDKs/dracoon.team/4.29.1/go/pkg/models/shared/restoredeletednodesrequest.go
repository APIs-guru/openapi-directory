package shared

type RestoreDeletedNodesRequestResolutionStrategyEnum string

const (
	RestoreDeletedNodesRequestResolutionStrategyEnumAutorename RestoreDeletedNodesRequestResolutionStrategyEnum = "autorename"
	RestoreDeletedNodesRequestResolutionStrategyEnumOverwrite  RestoreDeletedNodesRequestResolutionStrategyEnum = "overwrite"
	RestoreDeletedNodesRequestResolutionStrategyEnumFail       RestoreDeletedNodesRequestResolutionStrategyEnum = "fail"
)

// RestoreDeletedNodesRequest
// Request model for restoring deleted nodes
type RestoreDeletedNodesRequest struct {
	DeletedNodeIds     []int64                                           `json:"deletedNodeIds"`
	KeepShareLinks     *bool                                             `json:"keepShareLinks,omitempty"`
	ParentID           *int64                                            `json:"parentId,omitempty"`
	ResolutionStrategy *RestoreDeletedNodesRequestResolutionStrategyEnum `json:"resolutionStrategy,omitempty"`
}
