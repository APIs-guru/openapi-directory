package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistrictAdminsQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=ending_before"`
	ShowLinks     *string `queryParam:"style=form,explode=true,name=show_links"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
}

type GetDistrictAdminsRequest struct {
	QueryParams GetDistrictAdminsQueryParams
}

type GetDistrictAdminsResponse struct {
	ContentType            string
	DistrictAdminsResponse *shared.DistrictAdminsResponse
	StatusCode             int64
}
