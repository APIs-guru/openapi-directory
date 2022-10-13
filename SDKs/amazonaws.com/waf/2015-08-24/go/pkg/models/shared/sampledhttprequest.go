package shared

import (
	"time"
)

type SampledHTTPRequest struct {
	Action              *string     `json:"Action"`
	Request             HTTPRequest `json:"Request"`
	RuleWithinRuleGroup *string     `json:"RuleWithinRuleGroup"`
	Timestamp           *time.Time  `json:"Timestamp"`
	Weight              int64       `json:"Weight"`
}
