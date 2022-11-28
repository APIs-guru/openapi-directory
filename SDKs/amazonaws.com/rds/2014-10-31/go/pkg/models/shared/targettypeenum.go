package shared

type TargetTypeEnum string

const (
	TargetTypeEnumRdsInstance           TargetTypeEnum = "RDS_INSTANCE"
	TargetTypeEnumRdsServerlessEndpoint TargetTypeEnum = "RDS_SERVERLESS_ENDPOINT"
	TargetTypeEnumTrackedCluster        TargetTypeEnum = "TRACKED_CLUSTER"
)
