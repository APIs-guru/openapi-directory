package shared

type MergeStrategyEnum string

const (
	MergeStrategyEnumOverwrite      MergeStrategyEnum = "Overwrite"
	MergeStrategyEnumFailOnConflict MergeStrategyEnum = "FailOnConflict"
)
