package shared

import (
	"time"
)

// EmailTemplateMetadata
// Contains information about an email template.
type EmailTemplateMetadata struct {
	CreatedTimestamp *time.Time `json:"CreatedTimestamp,omitempty"`
	TemplateName     *string    `json:"TemplateName,omitempty"`
}
