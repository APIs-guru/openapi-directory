package shared

import (
	"time"
)

// Api2ModelsRecipesRecipeVideoResponse
// DTO used to return the details of a recipe video
type Api2ModelsRecipesRecipeVideoResponse struct {
	InsertedOn     *time.Time `json:"InsertedOn,omitempty"`
	IsPrimaryVideo *bool      `json:"IsPrimaryVideo,omitempty"`
	MediaID        *string    `json:"MediaId,omitempty"`
	VidID          *int32     `json:"VidId,omitempty"`
}
