package shared

type IntentClosingSetting struct {
	Active          *bool                 `json:"active,omitempty"`
	ClosingResponse ResponseSpecification `json:"closingResponse"`
}
