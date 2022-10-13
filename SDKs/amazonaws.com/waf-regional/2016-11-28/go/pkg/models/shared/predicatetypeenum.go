package shared

type PredicateTypeEnum string

const (
	PredicateTypeEnumIPMatch           PredicateTypeEnum = "IPMatch"
	PredicateTypeEnumByteMatch         PredicateTypeEnum = "ByteMatch"
	PredicateTypeEnumSQLInjectionMatch PredicateTypeEnum = "SqlInjectionMatch"
	PredicateTypeEnumGeoMatch          PredicateTypeEnum = "GeoMatch"
	PredicateTypeEnumSizeConstraint    PredicateTypeEnum = "SizeConstraint"
	PredicateTypeEnumXSSMatch          PredicateTypeEnum = "XssMatch"
	PredicateTypeEnumRegexMatch        PredicateTypeEnum = "RegexMatch"
)
