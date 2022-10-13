package shared

import (
	"time"
)

type ProvisionedProductPlanDetails struct {
	CreatedTime            *time.Time                        `json:"CreatedTime"`
	NotificationArns       []string                          `json:"NotificationArns"`
	PathID                 *string                           `json:"PathId"`
	PlanID                 *string                           `json:"PlanId"`
	PlanName               *string                           `json:"PlanName"`
	PlanType               *ProvisionedProductPlanTypeEnum   `json:"PlanType"`
	ProductID              *string                           `json:"ProductId"`
	ProvisionProductID     *string                           `json:"ProvisionProductId"`
	ProvisionProductName   *string                           `json:"ProvisionProductName"`
	ProvisioningArtifactID *string                           `json:"ProvisioningArtifactId"`
	ProvisioningParameters []UpdateProvisioningParameter     `json:"ProvisioningParameters"`
	Status                 *ProvisionedProductPlanStatusEnum `json:"Status"`
	StatusMessage          *string                           `json:"StatusMessage"`
	Tags                   []Tag                             `json:"Tags"`
	UpdatedTime            *time.Time                        `json:"UpdatedTime"`
}
