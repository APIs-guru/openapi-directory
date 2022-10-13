package shared

type BlockPublicAccess struct {
	BlockPublicAcls       *bool `json:"blockPublicAcls"`
	BlockPublicPolicy     *bool `json:"blockPublicPolicy"`
	IgnorePublicAcls      *bool `json:"ignorePublicAcls"`
	RestrictPublicBuckets *bool `json:"restrictPublicBuckets"`
}
