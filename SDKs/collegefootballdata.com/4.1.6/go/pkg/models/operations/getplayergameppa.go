package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlayerGamePpaQueryParams struct {
	ExcludeGarbageTime *bool   `queryParam:"style=form,explode=true,name=excludeGarbageTime"`
	PlayerID           *int64  `queryParam:"style=form,explode=true,name=playerId"`
	Position           *string `queryParam:"style=form,explode=true,name=position"`
	SeasonType         *string `queryParam:"style=form,explode=true,name=seasonType"`
	Team               *string `queryParam:"style=form,explode=true,name=team"`
	Threshold          *string `queryParam:"style=form,explode=true,name=threshold"`
	Week               *int64  `queryParam:"style=form,explode=true,name=week"`
	Year               *int64  `queryParam:"style=form,explode=true,name=year"`
}

type GetPlayerGamePpaRequest struct {
	QueryParams GetPlayerGamePpaQueryParams
}

type GetPlayerGamePpaResponse struct {
	ContentType    string
	PlayerGamePpas []shared.PlayerGamePpa
	StatusCode     int64
}
