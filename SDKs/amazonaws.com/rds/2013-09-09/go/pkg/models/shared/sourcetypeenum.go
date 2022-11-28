package shared

type SourceTypeEnum string

const (
	SourceTypeEnumDbInstance       SourceTypeEnum = "db-instance"
	SourceTypeEnumDbParameterGroup SourceTypeEnum = "db-parameter-group"
	SourceTypeEnumDbSecurityGroup  SourceTypeEnum = "db-security-group"
	SourceTypeEnumDbSnapshot       SourceTypeEnum = "db-snapshot"
)
