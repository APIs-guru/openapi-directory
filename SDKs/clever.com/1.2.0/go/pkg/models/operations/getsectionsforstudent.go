package operations

import (
	"openapi/pkg/models/shared"
)

type GetSectionsForStudentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSectionsForStudentQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=ending_before"`
	Limit         *int64  `queryParam:"style=form,explode=true,name=limit"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
}

type GetSectionsForStudentRequest struct {
	PathParams  GetSectionsForStudentPathParams
	QueryParams GetSectionsForStudentQueryParams
}

type GetSectionsForStudentResponse struct {
	ContentType      string
	NotFound         *shared.NotFound
	SectionsResponse *shared.SectionsResponse
	StatusCode       int64
}
