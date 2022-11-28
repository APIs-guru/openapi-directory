package shared

// Compliance
// Contains finding details that are specific to control-based findings. Only returned for findings generated from controls.
type Compliance struct {
	RelatedRequirements []string              `json:"RelatedRequirements,omitempty"`
	Status              *ComplianceStatusEnum `json:"Status,omitempty"`
	StatusReasons       []StatusReason        `json:"StatusReasons,omitempty"`
}
