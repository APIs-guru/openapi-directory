package shared

// AdditionalOption
// This complex type contains information about a shipping option that can be purchased in addition to the base shipping cost of a recommended rate. Additional options for each rate are defined, named, and offered by the selected shipping carrier. Examples include shipping insurance or the requirement for a recipient signature.
type AdditionalOption struct {
	AdditionalCost *Amount `json:"additionalCost,omitempty"`
	OptionType     *string `json:"optionType,omitempty"`
}
