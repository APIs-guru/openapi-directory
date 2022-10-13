package operations

import (
	"openapi/pkg/models/shared"
)

type RequestAuditNodeUserDataSyslogQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type RequestAuditNodeUserDataSyslogHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type RequestAuditNodeUserDataSyslogRequest struct {
	QueryParams RequestAuditNodeUserDataSyslogQueryParams
	Headers     RequestAuditNodeUserDataSyslogHeaders
}

type RequestAuditNodeUserDataSyslogResponse struct {
	AuditNodeResponses []shared.AuditNodeResponse
	ContentType        string
	ErrorResponse      *shared.ErrorResponse
	StatusCode         int64
}
