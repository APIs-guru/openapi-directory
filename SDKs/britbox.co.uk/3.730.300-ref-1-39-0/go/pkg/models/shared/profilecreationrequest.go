package shared

type ProfileCreationRequest struct {
	LanguageCode    *string  `json:"languageCode"`
	Name            string   `json:"name"`
	PinEnabled      *bool    `json:"pinEnabled"`
	PurchaseEnabled *bool    `json:"purchaseEnabled"`
	Segments        []string `json:"segments"`
}
