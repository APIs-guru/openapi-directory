package shared

import (
"time")

type SampledHTTPRequest struct {
    Action *string `json:"Action,omitempty"`
    Request HTTPRequest `json:"Request"`
    RuleWithinRuleGroup *string `json:"RuleWithinRuleGroup,omitempty"`
    Timestamp *time.Time `json:"Timestamp,omitempty"`
    Weight int64 `json:"Weight"`
    
}

