package shared

type DescribeProvisionedProductPlanOutput struct {
	NextPageToken                 *string                        `json:"NextPageToken"`
	ProvisionedProductPlanDetails *ProvisionedProductPlanDetails `json:"ProvisionedProductPlanDetails"`
	ResourceChanges               []ResourceChange               `json:"ResourceChanges"`
}
