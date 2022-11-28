package shared

import (
	"time"
)

// StandardsControl
// Details for an individual security standard control.
type StandardsControl struct {
	ControlID              *string             `json:"ControlId,omitempty"`
	ControlStatus          *ControlStatusEnum  `json:"ControlStatus,omitempty"`
	ControlStatusUpdatedAt *time.Time          `json:"ControlStatusUpdatedAt,omitempty"`
	Description            *string             `json:"Description,omitempty"`
	DisabledReason         *string             `json:"DisabledReason,omitempty"`
	RelatedRequirements    []string            `json:"RelatedRequirements,omitempty"`
	RemediationURL         *string             `json:"RemediationUrl,omitempty"`
	SeverityRating         *SeverityRatingEnum `json:"SeverityRating,omitempty"`
	StandardsControlArn    *string             `json:"StandardsControlArn,omitempty"`
	Title                  *string             `json:"Title,omitempty"`
}
