package shared

type AdditionalOption struct {
	AdditionalCost *Amount `json:"additionalCost,omitempty"`
	OptionType     *string `json:"optionType,omitempty"`
}
