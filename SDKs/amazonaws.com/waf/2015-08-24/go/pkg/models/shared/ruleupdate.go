package shared

type RuleUpdate struct {
	Action    ChangeActionEnum `json:"Action"`
	Predicate Predicate        `json:"Predicate"`
}
