package shared

type DescribeDrtAccessResponse struct {
	LogBucketList []string `json:"LogBucketList"`
	RoleArn       *string  `json:"RoleArn"`
}
