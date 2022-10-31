package shared



type DescribeProvisionedProductOutput struct {
    CloudWatchDashboards []CloudWatchDashboard `json:"CloudWatchDashboards,omitempty"`
    ProvisionedProductDetail *ProvisionedProductDetail `json:"ProvisionedProductDetail,omitempty"`
    
}

