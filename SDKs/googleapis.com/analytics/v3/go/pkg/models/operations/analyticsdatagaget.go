package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsDataGaGetOutputEnum string

const (
	AnalyticsDataGaGetOutputEnumDataTable AnalyticsDataGaGetOutputEnum = "dataTable"
	AnalyticsDataGaGetOutputEnumJSON      AnalyticsDataGaGetOutputEnum = "json"
)

type AnalyticsDataGaGetSamplingLevelEnum string

const (
	AnalyticsDataGaGetSamplingLevelEnumDefault         AnalyticsDataGaGetSamplingLevelEnum = "DEFAULT"
	AnalyticsDataGaGetSamplingLevelEnumFaster          AnalyticsDataGaGetSamplingLevelEnum = "FASTER"
	AnalyticsDataGaGetSamplingLevelEnumHigherPrecision AnalyticsDataGaGetSamplingLevelEnum = "HIGHER_PRECISION"
)

type AnalyticsDataGaGetQueryParams struct {
	Alt              *shared.AltEnum                      `queryParam:"style=form,explode=true,name=alt"`
	Dimensions       *string                              `queryParam:"style=form,explode=true,name=dimensions"`
	EndDate          string                               `queryParam:"style=form,explode=true,name=end-date"`
	Fields           *string                              `queryParam:"style=form,explode=true,name=fields"`
	Filters          *string                              `queryParam:"style=form,explode=true,name=filters"`
	Ids              string                               `queryParam:"style=form,explode=true,name=ids"`
	IncludeEmptyRows *bool                                `queryParam:"style=form,explode=true,name=include-empty-rows"`
	Key              *string                              `queryParam:"style=form,explode=true,name=key"`
	MaxResults       *int64                               `queryParam:"style=form,explode=true,name=max-results"`
	Metrics          string                               `queryParam:"style=form,explode=true,name=metrics"`
	OauthToken       *string                              `queryParam:"style=form,explode=true,name=oauth_token"`
	Output           *AnalyticsDataGaGetOutputEnum        `queryParam:"style=form,explode=true,name=output"`
	PrettyPrint      *bool                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser        *string                              `queryParam:"style=form,explode=true,name=quotaUser"`
	SamplingLevel    *AnalyticsDataGaGetSamplingLevelEnum `queryParam:"style=form,explode=true,name=samplingLevel"`
	Segment          *string                              `queryParam:"style=form,explode=true,name=segment"`
	Sort             *string                              `queryParam:"style=form,explode=true,name=sort"`
	StartDate        string                               `queryParam:"style=form,explode=true,name=start-date"`
	StartIndex       *int64                               `queryParam:"style=form,explode=true,name=start-index"`
	UserIP           *string                              `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsDataGaGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsDataGaGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsDataGaGetSecurity struct {
	Option1 *AnalyticsDataGaGetSecurityOption1 `security:"option"`
	Option2 *AnalyticsDataGaGetSecurityOption2 `security:"option"`
}

type AnalyticsDataGaGetRequest struct {
	QueryParams AnalyticsDataGaGetQueryParams
	Security    AnalyticsDataGaGetSecurity
}

type AnalyticsDataGaGetResponse struct {
	ContentType string
	GaData      *shared.GaData
	StatusCode  int64
}
