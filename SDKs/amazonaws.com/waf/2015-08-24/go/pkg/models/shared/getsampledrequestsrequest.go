package shared

type GetSampledRequestsRequest struct {
	MaxItems   int64      `json:"MaxItems"`
	RuleID     string     `json:"RuleId"`
	TimeWindow TimeWindow `json:"TimeWindow"`
	WebACLID   string     `json:"WebAclId"`
}
