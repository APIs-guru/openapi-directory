package shared

// UpdateFavoritesBulkRequest
// Request model for updating favorites
type UpdateFavoritesBulkRequest struct {
	IsFavorite bool    `json:"isFavorite"`
	ObjectIds  []int64 `json:"objectIds"`
}
