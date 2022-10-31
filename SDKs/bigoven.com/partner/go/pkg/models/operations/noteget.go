package operations

import (
	"openapi/pkg/models/shared"
)

type NoteGetPathParams struct {
	NoteID   int32 `pathParam:"style=simple,explode=false,name=noteId"`
	RecipeID int32 `pathParam:"style=simple,explode=false,name=recipeId"`
}

type NoteGetRequest struct {
	PathParams NoteGetPathParams
}

type NoteGetResponse struct {
	BigOvenModelAPIRecipeNote *shared.BigOvenModelAPIRecipeNote
	Body                      []byte
	ContentType               string
	StatusCode                int64
}
