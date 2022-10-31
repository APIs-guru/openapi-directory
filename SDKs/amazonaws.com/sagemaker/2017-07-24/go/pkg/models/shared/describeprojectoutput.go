package shared

import (
	"time"
)

type DescribeProjectOutput struct {
	CreatedBy                               *UserContext                             `json:"CreatedBy,omitempty"`
	CreationTime                            time.Time                                `json:"CreationTime"`
	ProjectArn                              string                                   `json:"ProjectArn"`
	ProjectDescription                      *string                                  `json:"ProjectDescription,omitempty"`
	ProjectID                               string                                   `json:"ProjectId"`
	ProjectName                             string                                   `json:"ProjectName"`
	ProjectStatus                           ProjectStatusEnum                        `json:"ProjectStatus"`
	ServiceCatalogProvisionedProductDetails *ServiceCatalogProvisionedProductDetails `json:"ServiceCatalogProvisionedProductDetails,omitempty"`
	ServiceCatalogProvisioningDetails       ServiceCatalogProvisioningDetails        `json:"ServiceCatalogProvisioningDetails"`
}
