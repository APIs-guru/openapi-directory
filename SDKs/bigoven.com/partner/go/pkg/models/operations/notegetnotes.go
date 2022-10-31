package operations

import (
	"openapi/pkg/models/shared"
)

type NoteGetNotesPathParams struct {
	RecipeID int32 `pathParam:"style=simple,explode=false,name=recipeId"`
}

type NoteGetNotesQueryParams struct {
	Pg  *int32 `queryParam:"style=form,explode=true,name=pg"`
	Rpp *int32 `queryParam:"style=form,explode=true,name=rpp"`
}

type NoteGetNotesRequest struct {
	PathParams  NoteGetNotesPathParams
	QueryParams NoteGetNotesQueryParams
}

type NoteGetNotesResponse struct {
	BigOvenModelAPIRecipeNoteList *shared.BigOvenModelAPIRecipeNoteList
	Body                          []byte
	ContentType                   string
	StatusCode                    int64
}
