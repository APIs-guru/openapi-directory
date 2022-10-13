package operations

import (
	"openapi/pkg/models/shared"
)

type AdexchangebuyerPerformanceReportListQueryParams struct {
	AccountID     string          `queryParam:"style=form,explode=true,name=accountId"`
	Alt           *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	EndDateTime   string          `queryParam:"style=form,explode=true,name=endDateTime"`
	Fields        *string         `queryParam:"style=form,explode=true,name=fields"`
	Key           *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults    *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken    *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken     *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint   *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser     *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	StartDateTime string          `queryParam:"style=form,explode=true,name=startDateTime"`
	UserIP        *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdexchangebuyerPerformanceReportListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdexchangebuyerPerformanceReportListRequest struct {
	QueryParams AdexchangebuyerPerformanceReportListQueryParams
	Security    AdexchangebuyerPerformanceReportListSecurity
}

type AdexchangebuyerPerformanceReportListResponse struct {
	ContentType           string
	PerformanceReportList *shared.PerformanceReportList
	StatusCode            int64
}
