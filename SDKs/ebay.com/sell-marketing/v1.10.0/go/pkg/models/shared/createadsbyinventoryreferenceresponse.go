package shared

// CreateAdsByInventoryReferenceResponse
// This type defines the fields returned when you create an ad by inventory reference ID.
type CreateAdsByInventoryReferenceResponse struct {
	Ads                    []AdReference `json:"ads,omitempty"`
	Errors                 []Error       `json:"errors,omitempty"`
	InventoryReferenceID   *string       `json:"inventoryReferenceId,omitempty"`
	InventoryReferenceType *string       `json:"inventoryReferenceType,omitempty"`
	StatusCode             *int32        `json:"statusCode,omitempty"`
}
