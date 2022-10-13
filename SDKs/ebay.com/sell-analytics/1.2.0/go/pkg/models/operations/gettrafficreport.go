package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrafficReportQueryParams struct {
	Dimension *string `queryParam:"style=form,explode=true,name=dimension"`
	Filter    *string `queryParam:"style=form,explode=true,name=filter"`
	Metric    *string `queryParam:"style=form,explode=true,name=metric"`
	Sort      *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetTrafficReportSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetTrafficReportRequest struct {
	QueryParams GetTrafficReportQueryParams
	Security    GetTrafficReportSecurity
}

type GetTrafficReportResponse struct {
	ContentType string
	Report      *shared.Report
	StatusCode  int64
}
