package shared

import (
	"time"
)

type ServiceSummary struct {
	Arn            string            `json:"arn"`
	CreatedAt      time.Time         `json:"createdAt"`
	Description    *string           `json:"description"`
	LastModifiedAt time.Time         `json:"lastModifiedAt"`
	Name           string            `json:"name"`
	Status         ServiceStatusEnum `json:"status"`
	StatusMessage  *string           `json:"statusMessage"`
	TemplateName   string            `json:"templateName"`
}
