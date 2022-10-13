package shared

type IntentClosingSetting struct {
	Active          *bool                 `json:"active"`
	ClosingResponse ResponseSpecification `json:"closingResponse"`
}
