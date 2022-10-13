package shared

type CreateAdsByInventoryReferenceResponse struct {
	Ads                    []AdReference `json:"ads"`
	Errors                 []Error       `json:"errors"`
	InventoryReferenceID   *string       `json:"inventoryReferenceId"`
	InventoryReferenceType *string       `json:"inventoryReferenceType"`
	StatusCode             *int32        `json:"statusCode"`
}
