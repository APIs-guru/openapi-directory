package shared

type ExpenseField struct {
	LabelDetection *ExpenseDetection `json:"LabelDetection"`
	PageNumber     *int64            `json:"PageNumber"`
	Type           *ExpenseType      `json:"Type"`
	ValueDetection *ExpenseDetection `json:"ValueDetection"`
}
