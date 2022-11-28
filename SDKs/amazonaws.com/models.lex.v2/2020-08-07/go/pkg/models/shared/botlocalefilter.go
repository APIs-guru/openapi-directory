package shared

// BotLocaleFilter
// Filters responses returned by the <code>ListBotLocales</code> operation.
type BotLocaleFilter struct {
	Name     BotLocaleFilterNameEnum     `json:"name"`
	Operator BotLocaleFilterOperatorEnum `json:"operator"`
	Values   []string                    `json:"values"`
}
