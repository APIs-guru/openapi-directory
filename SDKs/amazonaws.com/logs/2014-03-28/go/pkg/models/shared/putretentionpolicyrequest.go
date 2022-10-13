package shared

type PutRetentionPolicyRequest struct {
	LogGroupName    string `json:"logGroupName"`
	RetentionInDays int64  `json:"retentionInDays"`
}
