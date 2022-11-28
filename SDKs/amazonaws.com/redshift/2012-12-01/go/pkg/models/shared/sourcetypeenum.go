package shared

type SourceTypeEnum string

const (
	SourceTypeEnumCluster               SourceTypeEnum = "cluster"
	SourceTypeEnumClusterParameterGroup SourceTypeEnum = "cluster-parameter-group"
	SourceTypeEnumClusterSecurityGroup  SourceTypeEnum = "cluster-security-group"
	SourceTypeEnumClusterSnapshot       SourceTypeEnum = "cluster-snapshot"
	SourceTypeEnumScheduledAction       SourceTypeEnum = "scheduled-action"
)
