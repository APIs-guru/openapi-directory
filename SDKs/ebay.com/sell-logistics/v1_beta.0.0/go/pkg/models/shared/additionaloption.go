package shared

type AdditionalOption struct {
	AdditionalCost *Amount `json:"additionalCost"`
	OptionType     *string `json:"optionType"`
}
