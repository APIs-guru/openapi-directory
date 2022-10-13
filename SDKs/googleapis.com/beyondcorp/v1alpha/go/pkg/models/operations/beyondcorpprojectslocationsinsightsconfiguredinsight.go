package operations

import (
	"openapi/pkg/models/shared"
)

type BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams struct {
	Insight string `pathParam:"style=simple,explode=false,name=insight"`
}

type BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum string

const (
	BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnumAggregationUnspecified BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum = "AGGREGATION_UNSPECIFIED"
	BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnumHourly                 BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum = "HOURLY"
	BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnumDaily                  BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum = "DAILY"
	BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnumWeekly                 BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum = "WEEKLY"
	BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnumMonthly                BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum = "MONTHLY"
	BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnumCustomDateRange        BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum = "CUSTOM_DATE_RANGE"
)

type BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams struct {
	DollarXgafv               *shared.XgafvEnum                                                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken               *string                                                              `queryParam:"style=form,explode=true,name=access_token"`
	Aggregation               *BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum `queryParam:"style=form,explode=true,name=aggregation"`
	Alt                       *shared.AltEnum                                                      `queryParam:"style=form,explode=true,name=alt"`
	Callback                  *string                                                              `queryParam:"style=form,explode=true,name=callback"`
	CustomGroupingFieldFilter *string                                                              `queryParam:"style=form,explode=true,name=customGrouping.fieldFilter"`
	CustomGroupingGroupFields []string                                                             `queryParam:"style=form,explode=true,name=customGrouping.groupFields"`
	EndTime                   *string                                                              `queryParam:"style=form,explode=true,name=endTime"`
	FieldFilter               *string                                                              `queryParam:"style=form,explode=true,name=fieldFilter"`
	Fields                    *string                                                              `queryParam:"style=form,explode=true,name=fields"`
	Group                     *string                                                              `queryParam:"style=form,explode=true,name=group"`
	Key                       *string                                                              `queryParam:"style=form,explode=true,name=key"`
	OauthToken                *string                                                              `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize                  *int64                                                               `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken                 *string                                                              `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint               *bool                                                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                 *string                                                              `queryParam:"style=form,explode=true,name=quotaUser"`
	StartTime                 *string                                                              `queryParam:"style=form,explode=true,name=startTime"`
	UploadType                *string                                                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol            *string                                                              `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BeyondcorpProjectsLocationsInsightsConfiguredInsightRequest struct {
	PathParams  BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams
	QueryParams BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams
	Security    BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity
}

type BeyondcorpProjectsLocationsInsightsConfiguredInsightResponse struct {
	ContentType                                                               string
	GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse *shared.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse
	StatusCode                                                                int64
}
