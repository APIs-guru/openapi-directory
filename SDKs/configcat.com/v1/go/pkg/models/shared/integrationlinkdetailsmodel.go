package shared

type IntegrationLinkDetailsModel struct {
	AllIntegrationLinkCount *int32                  `json:"allIntegrationLinkCount"`
	Details                 []IntegrationLinkDetail `json:"details"`
}
