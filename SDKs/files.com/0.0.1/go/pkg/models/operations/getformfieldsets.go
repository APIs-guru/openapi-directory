package operations

import (
	"openapi/pkg/models/shared"
)

type GetFormFieldSetsQueryParams struct {
	Cursor  *string `queryParam:"style=form,explode=true,name=cursor"`
	PerPage *int32  `queryParam:"style=form,explode=true,name=per_page"`
	UserID  *int32  `queryParam:"style=form,explode=true,name=user_id"`
}

type GetFormFieldSetsRequest struct {
	QueryParams GetFormFieldSetsQueryParams
}

type GetFormFieldSetsResponse struct {
	ContentType          string
	FormFieldSetEntities []shared.FormFieldSetEntity
	StatusCode           int64
}
