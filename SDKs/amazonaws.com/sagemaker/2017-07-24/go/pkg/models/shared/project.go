package shared

import (
	"time"
)

type Project struct {
	CreatedBy                               *UserContext                             `json:"CreatedBy"`
	CreationTime                            *time.Time                               `json:"CreationTime"`
	ProjectArn                              *string                                  `json:"ProjectArn"`
	ProjectDescription                      *string                                  `json:"ProjectDescription"`
	ProjectID                               *string                                  `json:"ProjectId"`
	ProjectName                             *string                                  `json:"ProjectName"`
	ProjectStatus                           *ProjectStatusEnum                       `json:"ProjectStatus"`
	ServiceCatalogProvisionedProductDetails *ServiceCatalogProvisionedProductDetails `json:"ServiceCatalogProvisionedProductDetails"`
	ServiceCatalogProvisioningDetails       *ServiceCatalogProvisioningDetails       `json:"ServiceCatalogProvisioningDetails"`
	Tags                                    []Tag                                    `json:"Tags"`
}
