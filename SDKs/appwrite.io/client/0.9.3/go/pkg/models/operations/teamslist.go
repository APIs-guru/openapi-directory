package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsListQueryParams struct {
	Limit     *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset    *int32  `queryParam:"style=form,explode=true,name=offset"`
	OrderType *string `queryParam:"style=form,explode=true,name=orderType"`
	Search    *string `queryParam:"style=form,explode=true,name=search"`
}

type TeamsListSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type TeamsListRequest struct {
	QueryParams TeamsListQueryParams
	Security    TeamsListSecurity
}

type TeamsListResponse struct {
	ContentType string
	StatusCode  int64
	TeamList    *shared.TeamList
}
