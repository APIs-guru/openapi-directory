package shared

type CopyNodesRequestResolutionStrategyEnum string

const (
	CopyNodesRequestResolutionStrategyEnumAutorename CopyNodesRequestResolutionStrategyEnum = "autorename"
	CopyNodesRequestResolutionStrategyEnumOverwrite  CopyNodesRequestResolutionStrategyEnum = "overwrite"
	CopyNodesRequestResolutionStrategyEnumFail       CopyNodesRequestResolutionStrategyEnum = "fail"
)

type CopyNodesRequest struct {
	Items              []CopyNode                              `json:"items"`
	KeepShareLinks     *bool                                   `json:"keepShareLinks"`
	NodeIds            []int64                                 `json:"nodeIds"`
	ResolutionStrategy *CopyNodesRequestResolutionStrategyEnum `json:"resolutionStrategy"`
}
