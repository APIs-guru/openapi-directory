package operations

import (
	"openapi/pkg/models/shared"
)

type GetSectionsForProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type GetSectionsForProjectQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetSectionsForProject200ApplicationJSON struct {
	Data []shared.SectionCompact `json:"data,omitempty"`
}

type GetSectionsForProjectRequest struct {
	PathParams  GetSectionsForProjectPathParams
	QueryParams GetSectionsForProjectQueryParams
}

type GetSectionsForProjectResponse struct {
	ContentType                                   string
	ErrorResponse                                 *shared.ErrorResponse
	StatusCode                                    int64
	GetSectionsForProject200ApplicationJSONObject *GetSectionsForProject200ApplicationJSON
}
