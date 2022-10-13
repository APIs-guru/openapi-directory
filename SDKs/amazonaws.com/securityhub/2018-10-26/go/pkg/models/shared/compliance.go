package shared

type Compliance struct {
	RelatedRequirements []string              `json:"RelatedRequirements"`
	Status              *ComplianceStatusEnum `json:"Status"`
	StatusReasons       []StatusReason        `json:"StatusReasons"`
}
