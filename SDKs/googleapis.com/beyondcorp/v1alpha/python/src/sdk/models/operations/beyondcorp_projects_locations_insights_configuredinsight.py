from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams:
    insight: str = field(default=None, metadata={'path_param': { 'field_name': 'insight', 'style': 'simple', 'explode': False }})
    
class BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum(str, Enum):
    AGGREGATION_UNSPECIFIED = "AGGREGATION_UNSPECIFIED"
    HOURLY = "HOURLY"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    CUSTOM_DATE_RANGE = "CUSTOM_DATE_RANGE"


@dataclass
class BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    aggregation: Optional[BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum] = field(default=None, metadata={'query_param': { 'field_name': 'aggregation', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    custom_grouping_field_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customGrouping.fieldFilter', 'style': 'form', 'explode': True }})
    custom_grouping_group_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'customGrouping.groupFields', 'style': 'form', 'explode': True }})
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    field_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fieldFilter', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    start_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BeyondcorpProjectsLocationsInsightsConfiguredInsightRequest:
    path_params: BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams = field(default=None)
    query_params: BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams = field(default=None)
    security: BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity = field(default=None)
    

@dataclass
class BeyondcorpProjectsLocationsInsightsConfiguredInsightResponse:
    content_type: str = field(default=None)
    google_cloud_beyondcorp_saasplatform_insights_v1alpha_configured_insight_response: Optional[shared.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse] = field(default=None)
    status_code: int = field(default=None)
    
