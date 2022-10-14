package shared

type DescribeProvisionedProductPlanOutput struct {
	NextPageToken                 *string                        `json:"NextPageToken,omitempty"`
	ProvisionedProductPlanDetails *ProvisionedProductPlanDetails `json:"ProvisionedProductPlanDetails,omitempty"`
	ResourceChanges               []ResourceChange               `json:"ResourceChanges,omitempty"`
}
