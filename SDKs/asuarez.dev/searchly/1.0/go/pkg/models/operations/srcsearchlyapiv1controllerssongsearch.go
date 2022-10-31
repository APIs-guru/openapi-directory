package operations

import (
	"openapi/pkg/models/shared"
)

type SrcSearchlyAPIV1ControllersSongSearchQueryParams struct {
	Query string `queryParam:"style=form,explode=true,name=query"`
}

type SrcSearchlyAPIV1ControllersSongSearchRequest struct {
	QueryParams SrcSearchlyAPIV1ControllersSongSearchQueryParams
}

type SrcSearchlyAPIV1ControllersSongSearchResponse struct {
	APIResponseSong                                                   *shared.APIResponseSong
	ContentType                                                       string
	StatusCode                                                        int64
	SrcSearchlyAPIV1ControllersSongSearchDefaultApplicationTextString *string
}
