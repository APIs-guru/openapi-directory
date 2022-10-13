package operations

import (
	"openapi/pkg/models/shared"
)

type LicensesGetAllCommonlyUsedQueryParams struct {
	Featured *bool  `queryParam:"style=form,explode=true,name=featured"`
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage  *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type LicensesGetAllCommonlyUsedRequest struct {
	QueryParams LicensesGetAllCommonlyUsedQueryParams
}

type LicensesGetAllCommonlyUsedResponse struct {
	ContentType    string
	StatusCode     int64
	LicenseSimples []shared.LicenseSimple
}
