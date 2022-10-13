package shared

import (
	"time"
)

type StandardsControl struct {
	ControlID              *string             `json:"ControlId"`
	ControlStatus          *ControlStatusEnum  `json:"ControlStatus"`
	ControlStatusUpdatedAt *time.Time          `json:"ControlStatusUpdatedAt"`
	Description            *string             `json:"Description"`
	DisabledReason         *string             `json:"DisabledReason"`
	RelatedRequirements    []string            `json:"RelatedRequirements"`
	RemediationURL         *string             `json:"RemediationUrl"`
	SeverityRating         *SeverityRatingEnum `json:"SeverityRating"`
	StandardsControlArn    *string             `json:"StandardsControlArn"`
	Title                  *string             `json:"Title"`
}
