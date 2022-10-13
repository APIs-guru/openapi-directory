package shared

import (
	"time"
)

type EmailTemplateMetadata struct {
	CreatedTimestamp *time.Time `json:"CreatedTimestamp"`
	TemplateName     *string    `json:"TemplateName"`
}
