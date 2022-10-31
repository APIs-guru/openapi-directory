package shared

type RulesSource struct {
	RulesSourceList                *RulesSourceList                `json:"RulesSourceList,omitempty"`
	RulesString                    *string                         `json:"RulesString,omitempty"`
	StatefulRules                  []StatefulRule                  `json:"StatefulRules,omitempty"`
	StatelessRulesAndCustomActions *StatelessRulesAndCustomActions `json:"StatelessRulesAndCustomActions,omitempty"`
}
