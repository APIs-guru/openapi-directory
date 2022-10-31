package shared

import (
	"time"
)

type Api2ModelsRecipesRecipeVideoResponse struct {
	InsertedOn     *time.Time `json:"InsertedOn,omitempty"`
	IsPrimaryVideo *bool      `json:"IsPrimaryVideo,omitempty"`
	MediaID        *string    `json:"MediaId,omitempty"`
	VidID          *int32     `json:"VidId,omitempty"`
}
