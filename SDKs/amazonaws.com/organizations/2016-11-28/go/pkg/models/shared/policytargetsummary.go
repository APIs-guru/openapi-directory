package shared

type PolicyTargetSummary struct {
	Arn      *string         `json:"Arn"`
	Name     *string         `json:"Name"`
	TargetID *string         `json:"TargetId"`
	Type     *TargetTypeEnum `json:"Type"`
}
