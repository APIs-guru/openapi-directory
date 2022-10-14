package shared

type CreateAdsByInventoryReferenceResponse struct {
	Ads                    []AdReference `json:"ads,omitempty"`
	Errors                 []Error       `json:"errors,omitempty"`
	InventoryReferenceID   *string       `json:"inventoryReferenceId,omitempty"`
	InventoryReferenceType *string       `json:"inventoryReferenceType,omitempty"`
	StatusCode             *int32        `json:"statusCode,omitempty"`
}
