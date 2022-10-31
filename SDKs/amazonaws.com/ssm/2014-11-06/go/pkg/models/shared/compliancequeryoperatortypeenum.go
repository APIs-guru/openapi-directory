package shared

type ComplianceQueryOperatorTypeEnum string

const (
	ComplianceQueryOperatorTypeEnumEqual       ComplianceQueryOperatorTypeEnum = "EQUAL"
	ComplianceQueryOperatorTypeEnumNotEqual    ComplianceQueryOperatorTypeEnum = "NOT_EQUAL"
	ComplianceQueryOperatorTypeEnumBeginWith   ComplianceQueryOperatorTypeEnum = "BEGIN_WITH"
	ComplianceQueryOperatorTypeEnumLessThan    ComplianceQueryOperatorTypeEnum = "LESS_THAN"
	ComplianceQueryOperatorTypeEnumGreaterThan ComplianceQueryOperatorTypeEnum = "GREATER_THAN"
)
