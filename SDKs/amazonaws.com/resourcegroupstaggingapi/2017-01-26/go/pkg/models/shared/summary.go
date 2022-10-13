package shared

type Summary struct {
	LastUpdated           *string           `json:"LastUpdated"`
	NonCompliantResources *int64            `json:"NonCompliantResources"`
	Region                *string           `json:"Region"`
	ResourceType          *string           `json:"ResourceType"`
	TargetID              *string           `json:"TargetId"`
	TargetIDType          *TargetIDTypeEnum `json:"TargetIdType"`
}
