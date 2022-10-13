package shared

type PolicySummary struct {
	Arn         *string         `json:"Arn"`
	AwsManaged  *bool           `json:"AwsManaged"`
	Description *string         `json:"Description"`
	ID          *string         `json:"Id"`
	Name        *string         `json:"Name"`
	Type        *PolicyTypeEnum `json:"Type"`
}
