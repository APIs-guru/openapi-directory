package shared

type NumericFilterOperationEnum string

const (
	NumericFilterOperationEnumOperationUnspecified NumericFilterOperationEnum = "OPERATION_UNSPECIFIED"
	NumericFilterOperationEnumEqual                NumericFilterOperationEnum = "EQUAL"
	NumericFilterOperationEnumLessThan             NumericFilterOperationEnum = "LESS_THAN"
	NumericFilterOperationEnumLessThanOrEqual      NumericFilterOperationEnum = "LESS_THAN_OR_EQUAL"
	NumericFilterOperationEnumGreaterThan          NumericFilterOperationEnum = "GREATER_THAN"
	NumericFilterOperationEnumGreaterThanOrEqual   NumericFilterOperationEnum = "GREATER_THAN_OR_EQUAL"
)

// NumericFilter
// Filters for numeric or date values.
type NumericFilter struct {
	Operation *NumericFilterOperationEnum `json:"operation,omitempty"`
	Value     *NumericValue               `json:"value,omitempty"`
}
