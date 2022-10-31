package shared

import (
	"time"
)

type EmailTemplateMetadata struct {
	CreatedTimestamp *time.Time `json:"CreatedTimestamp,omitempty"`
	TemplateName     *string    `json:"TemplateName,omitempty"`
}
