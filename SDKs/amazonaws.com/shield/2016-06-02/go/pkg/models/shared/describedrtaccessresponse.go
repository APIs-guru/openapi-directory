package shared

type DescribeDrtAccessResponse struct {
	LogBucketList []string `json:"LogBucketList,omitempty"`
	RoleArn       *string  `json:"RoleArn,omitempty"`
}
