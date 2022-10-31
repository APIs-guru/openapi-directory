package operations

import (
	"openapi/pkg/models/shared"
)

type PutFactQueryParams struct {
	Category    string `queryParam:"style=form,explode=true,name=category"`
	Fact        string `queryParam:"style=form,explode=true,name=fact"`
	Subcategory string `queryParam:"style=form,explode=true,name=subcategory"`
	Tags        string `queryParam:"style=form,explode=true,name=tags"`
}

type PutFactSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PutFactRequest struct {
	QueryParams PutFactQueryParams
	Security    PutFactSecurity
}

type PutFactResponse struct {
	ContentType string
	StatusCode  int64
}
