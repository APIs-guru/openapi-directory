package shared

type SourceTypeEnum string

const (
	SourceTypeEnumNode           SourceTypeEnum = "node"
	SourceTypeEnumParameterGroup SourceTypeEnum = "parameter-group"
	SourceTypeEnumSubnetGroup    SourceTypeEnum = "subnet-group"
	SourceTypeEnumCluster        SourceTypeEnum = "cluster"
	SourceTypeEnumUser           SourceTypeEnum = "user"
	SourceTypeEnumACL            SourceTypeEnum = "acl"
)
