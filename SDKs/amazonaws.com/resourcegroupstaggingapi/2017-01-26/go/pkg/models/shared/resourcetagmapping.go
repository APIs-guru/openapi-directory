package shared

type ResourceTagMapping struct {
	ComplianceDetails *ComplianceDetails `json:"ComplianceDetails"`
	ResourceArn       *string            `json:"ResourceARN"`
	Tags              []Tag              `json:"Tags"`
}
