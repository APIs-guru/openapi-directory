package shared

// DeleteAdsByInventoryReferenceResponse
// This type defines the fields returned by request to delete a set of ads by inventory reference ID.
type DeleteAdsByInventoryReferenceResponse struct {
	AdIds                  []string `json:"adIds,omitempty"`
	Errors                 []Error  `json:"errors,omitempty"`
	InventoryReferenceID   *string  `json:"inventoryReferenceId,omitempty"`
	InventoryReferenceType *string  `json:"inventoryReferenceType,omitempty"`
	StatusCode             *int32   `json:"statusCode,omitempty"`
}
