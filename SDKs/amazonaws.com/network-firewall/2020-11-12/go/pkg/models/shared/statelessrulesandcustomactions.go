package shared

type StatelessRulesAndCustomActions struct {
	CustomActions  []CustomAction  `json:"CustomActions"`
	StatelessRules []StatelessRule `json:"StatelessRules"`
}
