package shared

type CopyNodesRequestResolutionStrategyEnum string

const (
	CopyNodesRequestResolutionStrategyEnumAutorename CopyNodesRequestResolutionStrategyEnum = "autorename"
	CopyNodesRequestResolutionStrategyEnumOverwrite  CopyNodesRequestResolutionStrategyEnum = "overwrite"
	CopyNodesRequestResolutionStrategyEnumFail       CopyNodesRequestResolutionStrategyEnum = "fail"
)

type CopyNodesRequest struct {
	Items              []CopyNode                              `json:"items,omitempty"`
	KeepShareLinks     *bool                                   `json:"keepShareLinks,omitempty"`
	NodeIds            []int64                                 `json:"nodeIds,omitempty"`
	ResolutionStrategy *CopyNodesRequestResolutionStrategyEnum `json:"resolutionStrategy,omitempty"`
}
