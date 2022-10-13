package operations

import (
	"openapi/pkg/models/shared"
)

type PostUUIDQueryParams struct {
	Uuidstr string `queryParam:"style=form,explode=true,name=uuidstr"`
}

type PostUUIDSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PostUUIDRequest struct {
	QueryParams PostUUIDQueryParams
	Security    PostUUIDSecurity
}

type PostUUIDResponse struct {
	ContentType string
	StatusCode  int64
}
