package shared

type MoveNodesRequestResolutionStrategyEnum string

const (
	MoveNodesRequestResolutionStrategyEnumAutorename MoveNodesRequestResolutionStrategyEnum = "autorename"
	MoveNodesRequestResolutionStrategyEnumOverwrite  MoveNodesRequestResolutionStrategyEnum = "overwrite"
	MoveNodesRequestResolutionStrategyEnumFail       MoveNodesRequestResolutionStrategyEnum = "fail"
)

type MoveNodesRequest struct {
	Items              []MoveNode                              `json:"items"`
	KeepShareLinks     *bool                                   `json:"keepShareLinks"`
	NodeIds            []int64                                 `json:"nodeIds"`
	ResolutionStrategy *MoveNodesRequestResolutionStrategyEnum `json:"resolutionStrategy"`
}
