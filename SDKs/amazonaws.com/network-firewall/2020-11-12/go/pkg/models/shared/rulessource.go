package shared

type RulesSource struct {
	RulesSourceList                *RulesSourceList                `json:"RulesSourceList"`
	RulesString                    *string                         `json:"RulesString"`
	StatefulRules                  []StatefulRule                  `json:"StatefulRules"`
	StatelessRulesAndCustomActions *StatelessRulesAndCustomActions `json:"StatelessRulesAndCustomActions"`
}
