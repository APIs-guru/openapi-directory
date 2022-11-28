package shared

// ExpenseType
// An object used to store information about the Type detected by Amazon Textract.
type ExpenseType struct {
	Confidence *float32 `json:"Confidence,omitempty"`
	Text       *string  `json:"Text,omitempty"`
}
