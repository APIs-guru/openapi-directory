package shared

type ComparatorEnum string

const (
	ComparatorEnumLessThan             ComparatorEnum = "LessThan"
	ComparatorEnumLessThanOrEqualTo    ComparatorEnum = "LessThanOrEqualTo"
	ComparatorEnumGreaterThan          ComparatorEnum = "GreaterThan"
	ComparatorEnumGreaterThanOrEqualTo ComparatorEnum = "GreaterThanOrEqualTo"
	ComparatorEnumEqualTo              ComparatorEnum = "EqualTo"
	ComparatorEnumNotEqualTo           ComparatorEnum = "NotEqualTo"
	ComparatorEnumExists               ComparatorEnum = "Exists"
	ComparatorEnumDoesNotExist         ComparatorEnum = "DoesNotExist"
	ComparatorEnumIn                   ComparatorEnum = "In"
	ComparatorEnumNotIn                ComparatorEnum = "NotIn"
)
