package shared

import (
	"time"
)

type DescribeOrganizationResponse struct {
	Arn               *string    `json:"ARN,omitempty"`
	Alias             *string    `json:"Alias,omitempty"`
	CompletedDate     *time.Time `json:"CompletedDate,omitempty"`
	DefaultMailDomain *string    `json:"DefaultMailDomain,omitempty"`
	DirectoryID       *string    `json:"DirectoryId,omitempty"`
	DirectoryType     *string    `json:"DirectoryType,omitempty"`
	ErrorMessage      *string    `json:"ErrorMessage,omitempty"`
	OrganizationID    *string    `json:"OrganizationId,omitempty"`
	State             *string    `json:"State,omitempty"`
}
