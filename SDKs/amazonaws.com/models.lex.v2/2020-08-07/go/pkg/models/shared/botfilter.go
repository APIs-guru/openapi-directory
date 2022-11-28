package shared

// BotFilter
// Filters the responses returned by the <code>ListBots</code> operation.
type BotFilter struct {
	Name     BotFilterNameEnum     `json:"name"`
	Operator BotFilterOperatorEnum `json:"operator"`
	Values   []string              `json:"values"`
}
