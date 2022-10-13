package shared

import (
	"time"
)

type DescribeOrganizationResponse struct {
	Arn               *string    `json:"ARN"`
	Alias             *string    `json:"Alias"`
	CompletedDate     *time.Time `json:"CompletedDate"`
	DefaultMailDomain *string    `json:"DefaultMailDomain"`
	DirectoryID       *string    `json:"DirectoryId"`
	DirectoryType     *string    `json:"DirectoryType"`
	ErrorMessage      *string    `json:"ErrorMessage"`
	OrganizationID    *string    `json:"OrganizationId"`
	State             *string    `json:"State"`
}
