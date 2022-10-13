package shared

type ItemDraftResponse struct {
	ItemDraftID       *string `json:"itemDraftId"`
	SellFlowNativeURI *string `json:"sellFlowNativeUri"`
	SellFlowURL       *string `json:"sellFlowUrl"`
}
