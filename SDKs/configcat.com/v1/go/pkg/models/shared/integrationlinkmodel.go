package shared

type IntegrationLinkModel struct {
	Description         *string                  `json:"description"`
	IntegrationLinkType *IntegrationLinkTypeEnum `json:"integrationLinkType"`
	Key                 *string                  `json:"key"`
	URL                 *string                  `json:"url"`
}
