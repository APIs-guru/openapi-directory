package shared

type ResourcePolicy struct {
	LastUpdatedTime *int64  `json:"lastUpdatedTime"`
	PolicyDocument  *string `json:"policyDocument"`
	PolicyName      *string `json:"policyName"`
}
