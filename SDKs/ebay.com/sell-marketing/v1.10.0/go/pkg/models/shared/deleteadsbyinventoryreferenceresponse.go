package shared

type DeleteAdsByInventoryReferenceResponse struct {
	AdIds                  []string `json:"adIds"`
	Errors                 []Error  `json:"errors"`
	InventoryReferenceID   *string  `json:"inventoryReferenceId"`
	InventoryReferenceType *string  `json:"inventoryReferenceType"`
	StatusCode             *int32   `json:"statusCode"`
}
