package shared



type IntegrationLinkDetailsModel struct {
    AllIntegrationLinkCount *int32 `json:"allIntegrationLinkCount,omitempty"`
    Details []IntegrationLinkDetail `json:"details,omitempty"`
    
}

