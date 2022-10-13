package shared

import (
	"time"
)

type Service struct {
	Arn                     string            `json:"arn"`
	BranchName              *string           `json:"branchName"`
	CreatedAt               time.Time         `json:"createdAt"`
	Description             *string           `json:"description"`
	LastModifiedAt          time.Time         `json:"lastModifiedAt"`
	Name                    string            `json:"name"`
	Pipeline                *ServicePipeline  `json:"pipeline"`
	RepositoryConnectionArn *string           `json:"repositoryConnectionArn"`
	RepositoryID            *string           `json:"repositoryId"`
	Spec                    string            `json:"spec"`
	Status                  ServiceStatusEnum `json:"status"`
	StatusMessage           *string           `json:"statusMessage"`
	TemplateName            string            `json:"templateName"`
}
