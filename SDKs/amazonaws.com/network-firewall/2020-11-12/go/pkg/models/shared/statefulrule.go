package shared

type StatefulRule struct {
	Action      StatefulActionEnum `json:"Action"`
	Header      Header             `json:"Header"`
	RuleOptions []RuleOption       `json:"RuleOptions"`
}
