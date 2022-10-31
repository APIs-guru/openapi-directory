package shared

type BotLocaleFilter struct {
	Name     BotLocaleFilterNameEnum     `json:"name"`
	Operator BotLocaleFilterOperatorEnum `json:"operator"`
	Values   []string                    `json:"values"`
}
