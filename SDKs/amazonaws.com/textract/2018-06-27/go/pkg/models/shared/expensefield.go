package shared

type ExpenseField struct {
	LabelDetection *ExpenseDetection `json:"LabelDetection,omitempty"`
	PageNumber     *int64            `json:"PageNumber,omitempty"`
	Type           *ExpenseType      `json:"Type,omitempty"`
	ValueDetection *ExpenseDetection `json:"ValueDetection,omitempty"`
}
