package operations

import (
	"openapi/pkg/models/shared"
)

type AssignMsisdnQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type AssignMsisdnSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type AssignMsisdnRequest struct {
	QueryParams AssignMsisdnQueryParams
	Request     shared.ItvAssignMsisdnRequest `request:"mediaType=application/json"`
	Security    AssignMsisdnSecurity
}

type AssignMsisdnResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
