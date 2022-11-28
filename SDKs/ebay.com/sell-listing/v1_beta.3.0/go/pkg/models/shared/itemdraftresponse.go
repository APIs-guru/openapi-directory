package shared

// ItemDraftResponse
// The type that defines the field for the createItemDraft response.
type ItemDraftResponse struct {
	ItemDraftID       *string `json:"itemDraftId,omitempty"`
	SellFlowNativeURI *string `json:"sellFlowNativeUri,omitempty"`
	SellFlowURL       *string `json:"sellFlowUrl,omitempty"`
}
