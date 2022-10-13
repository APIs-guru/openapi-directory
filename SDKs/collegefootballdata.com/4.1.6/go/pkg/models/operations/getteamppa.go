package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamPpaQueryParams struct {
	Conference         *string `queryParam:"style=form,explode=true,name=conference"`
	ExcludeGarbageTime *bool   `queryParam:"style=form,explode=true,name=excludeGarbageTime"`
	Team               *string `queryParam:"style=form,explode=true,name=team"`
	Year               *int64  `queryParam:"style=form,explode=true,name=year"`
}

type GetTeamPpaRequest struct {
	QueryParams GetTeamPpaQueryParams
}

type GetTeamPpaResponse struct {
	ContentType string
	StatusCode  int64
	TeamPpas    []shared.TeamPpa
}
