package shared

import (
	"time"
)

// Project
// The properties of a project as returned by the Search API.
type Project struct {
	CreatedBy                               *UserContext                             `json:"CreatedBy,omitempty"`
	CreationTime                            *time.Time                               `json:"CreationTime,omitempty"`
	ProjectArn                              *string                                  `json:"ProjectArn,omitempty"`
	ProjectDescription                      *string                                  `json:"ProjectDescription,omitempty"`
	ProjectID                               *string                                  `json:"ProjectId,omitempty"`
	ProjectName                             *string                                  `json:"ProjectName,omitempty"`
	ProjectStatus                           *ProjectStatusEnum                       `json:"ProjectStatus,omitempty"`
	ServiceCatalogProvisionedProductDetails *ServiceCatalogProvisionedProductDetails `json:"ServiceCatalogProvisionedProductDetails,omitempty"`
	ServiceCatalogProvisioningDetails       *ServiceCatalogProvisioningDetails       `json:"ServiceCatalogProvisioningDetails,omitempty"`
	Tags                                    []Tag                                    `json:"Tags,omitempty"`
}
