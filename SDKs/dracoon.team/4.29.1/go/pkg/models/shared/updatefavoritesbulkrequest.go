package shared



type UpdateFavoritesBulkRequest struct {
    IsFavorite bool `json:"isFavorite"`
    ObjectIds []int64 `json:"objectIds"`
    
}

