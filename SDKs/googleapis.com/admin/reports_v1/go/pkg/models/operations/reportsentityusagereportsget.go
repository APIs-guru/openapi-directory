package operations

import (
	"openapi/pkg/models/shared"
)

type ReportsEntityUsageReportsGetEntityTypeEnum string

const (
	ReportsEntityUsageReportsGetEntityTypeEnumGplusCommunities ReportsEntityUsageReportsGetEntityTypeEnum = "gplus_communities"
)

type ReportsEntityUsageReportsGetPathParams struct {
	Date       string                                     `pathParam:"style=simple,explode=false,name=date"`
	EntityKey  string                                     `pathParam:"style=simple,explode=false,name=entityKey"`
	EntityType ReportsEntityUsageReportsGetEntityTypeEnum `pathParam:"style=simple,explode=false,name=entityType"`
}

type ReportsEntityUsageReportsGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	CustomerID     *string           `queryParam:"style=form,explode=true,name=customerId"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Filters        *string           `queryParam:"style=form,explode=true,name=filters"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	Parameters     *string           `queryParam:"style=form,explode=true,name=parameters"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ReportsEntityUsageReportsGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReportsEntityUsageReportsGetRequest struct {
	PathParams  ReportsEntityUsageReportsGetPathParams
	QueryParams ReportsEntityUsageReportsGetQueryParams
	Security    ReportsEntityUsageReportsGetSecurity
}

type ReportsEntityUsageReportsGetResponse struct {
	ContentType  string
	StatusCode   int64
	UsageReports *shared.UsageReports
}
