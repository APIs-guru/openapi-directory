package shared

type RuleDefinition struct {
	Actions         []string        `json:"Actions"`
	MatchAttributes MatchAttributes `json:"MatchAttributes"`
}
