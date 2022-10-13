package shared

type RestoreDeletedNodesRequestResolutionStrategyEnum string

const (
	RestoreDeletedNodesRequestResolutionStrategyEnumAutorename RestoreDeletedNodesRequestResolutionStrategyEnum = "autorename"
	RestoreDeletedNodesRequestResolutionStrategyEnumOverwrite  RestoreDeletedNodesRequestResolutionStrategyEnum = "overwrite"
	RestoreDeletedNodesRequestResolutionStrategyEnumFail       RestoreDeletedNodesRequestResolutionStrategyEnum = "fail"
)

type RestoreDeletedNodesRequest struct {
	DeletedNodeIds     []int64                                           `json:"deletedNodeIds"`
	KeepShareLinks     *bool                                             `json:"keepShareLinks"`
	ParentID           *int64                                            `json:"parentId"`
	ResolutionStrategy *RestoreDeletedNodesRequestResolutionStrategyEnum `json:"resolutionStrategy"`
}
