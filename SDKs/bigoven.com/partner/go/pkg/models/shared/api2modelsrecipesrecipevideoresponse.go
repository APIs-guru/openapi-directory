package shared

import (
	"time"
)

type Api2ModelsRecipesRecipeVideoResponse struct {
	InsertedOn     *time.Time `json:"InsertedOn"`
	IsPrimaryVideo *bool      `json:"IsPrimaryVideo"`
	MediaID        *string    `json:"MediaId"`
	VidID          *int32     `json:"VidId"`
}
