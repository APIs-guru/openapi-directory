package shared

import (
	"time"
)

type Service struct {
	Arn                     string            `json:"arn"`
	BranchName              *string           `json:"branchName,omitempty"`
	CreatedAt               time.Time         `json:"createdAt"`
	Description             *string           `json:"description,omitempty"`
	LastModifiedAt          time.Time         `json:"lastModifiedAt"`
	Name                    string            `json:"name"`
	Pipeline                *ServicePipeline  `json:"pipeline,omitempty"`
	RepositoryConnectionArn *string           `json:"repositoryConnectionArn,omitempty"`
	RepositoryID            *string           `json:"repositoryId,omitempty"`
	Spec                    string            `json:"spec"`
	Status                  ServiceStatusEnum `json:"status"`
	StatusMessage           *string           `json:"statusMessage,omitempty"`
	TemplateName            string            `json:"templateName"`
}
