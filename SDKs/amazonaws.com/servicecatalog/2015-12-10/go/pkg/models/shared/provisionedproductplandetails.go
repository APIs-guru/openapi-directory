package shared

import (
	"time"
)

// ProvisionedProductPlanDetails
// Information about a plan.
type ProvisionedProductPlanDetails struct {
	CreatedTime            *time.Time                        `json:"CreatedTime,omitempty"`
	NotificationArns       []string                          `json:"NotificationArns,omitempty"`
	PathID                 *string                           `json:"PathId,omitempty"`
	PlanID                 *string                           `json:"PlanId,omitempty"`
	PlanName               *string                           `json:"PlanName,omitempty"`
	PlanType               *ProvisionedProductPlanTypeEnum   `json:"PlanType,omitempty"`
	ProductID              *string                           `json:"ProductId,omitempty"`
	ProvisionProductID     *string                           `json:"ProvisionProductId,omitempty"`
	ProvisionProductName   *string                           `json:"ProvisionProductName,omitempty"`
	ProvisioningArtifactID *string                           `json:"ProvisioningArtifactId,omitempty"`
	ProvisioningParameters []UpdateProvisioningParameter     `json:"ProvisioningParameters,omitempty"`
	Status                 *ProvisionedProductPlanStatusEnum `json:"Status,omitempty"`
	StatusMessage          *string                           `json:"StatusMessage,omitempty"`
	Tags                   []Tag                             `json:"Tags,omitempty"`
	UpdatedTime            *time.Time                        `json:"UpdatedTime,omitempty"`
}
