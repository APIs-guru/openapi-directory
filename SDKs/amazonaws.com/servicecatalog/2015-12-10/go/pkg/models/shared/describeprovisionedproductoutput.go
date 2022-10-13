package shared

type DescribeProvisionedProductOutput struct {
	CloudWatchDashboards     []CloudWatchDashboard     `json:"CloudWatchDashboards"`
	ProvisionedProductDetail *ProvisionedProductDetail `json:"ProvisionedProductDetail"`
}
