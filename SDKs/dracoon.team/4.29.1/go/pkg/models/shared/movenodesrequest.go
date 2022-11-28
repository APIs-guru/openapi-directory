package shared

type MoveNodesRequestResolutionStrategyEnum string

const (
	MoveNodesRequestResolutionStrategyEnumAutorename MoveNodesRequestResolutionStrategyEnum = "autorename"
	MoveNodesRequestResolutionStrategyEnumOverwrite  MoveNodesRequestResolutionStrategyEnum = "overwrite"
	MoveNodesRequestResolutionStrategyEnumFail       MoveNodesRequestResolutionStrategyEnum = "fail"
)

// MoveNodesRequest
// Request model for moving nodes
type MoveNodesRequest struct {
	Items              []MoveNode                              `json:"items,omitempty"`
	KeepShareLinks     *bool                                   `json:"keepShareLinks,omitempty"`
	NodeIds            []int64                                 `json:"nodeIds,omitempty"`
	ResolutionStrategy *MoveNodesRequestResolutionStrategyEnum `json:"resolutionStrategy,omitempty"`
}
