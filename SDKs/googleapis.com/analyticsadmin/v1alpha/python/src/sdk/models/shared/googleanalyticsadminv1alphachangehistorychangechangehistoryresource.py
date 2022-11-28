from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource:
    r"""GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource
    A snapshot of a resource as before or after the result of a change in change history.
    """
    
    account: Optional[GoogleAnalyticsAdminV1alphaAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    attribution_settings: Optional[GoogleAnalyticsAdminV1alphaAttributionSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributionSettings') }})
    conversion_event: Optional[GoogleAnalyticsAdminV1alphaConversionEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionEvent') }})
    custom_dimension: Optional[GoogleAnalyticsAdminV1alphaCustomDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDimension') }})
    custom_metric: Optional[GoogleAnalyticsAdminV1alphaCustomMetric] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customMetric') }})
    data_retention_settings: Optional[GoogleAnalyticsAdminV1alphaDataRetentionSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRetentionSettings') }})
    data_stream: Optional[GoogleAnalyticsAdminV1alphaDataStream] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataStream') }})
    display_video360_advertiser_link: Optional[GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayVideo360AdvertiserLink') }})
    display_video360_advertiser_link_proposal: Optional[GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayVideo360AdvertiserLinkProposal') }})
    expanded_data_set: Optional[GoogleAnalyticsAdminV1alphaExpandedDataSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expandedDataSet') }})
    firebase_link: Optional[GoogleAnalyticsAdminV1alphaFirebaseLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firebaseLink') }})
    google_ads_link: Optional[GoogleAnalyticsAdminV1alphaGoogleAdsLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleAdsLink') }})
    google_signals_settings: Optional[GoogleAnalyticsAdminV1alphaGoogleSignalsSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleSignalsSettings') }})
    measurement_protocol_secret: Optional[GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurementProtocolSecret') }})
    property: Optional[GoogleAnalyticsAdminV1alphaProperty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    search_ads360_link: Optional[GoogleAnalyticsAdminV1alphaSearchAds360Link] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchAds360Link') }})
    
