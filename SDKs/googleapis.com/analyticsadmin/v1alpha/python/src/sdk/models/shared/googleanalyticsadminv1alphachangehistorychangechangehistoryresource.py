from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaccount
from . import googleanalyticsadminv1alphaattributionsettings
from . import googleanalyticsadminv1alphaconversionevent
from . import googleanalyticsadminv1alphacustomdimension
from . import googleanalyticsadminv1alphacustommetric
from . import googleanalyticsadminv1alphadataretentionsettings
from . import googleanalyticsadminv1alphadatastream
from . import googleanalyticsadminv1alphadisplayvideo360advertiserlink
from . import googleanalyticsadminv1alphadisplayvideo360advertiserlinkproposal
from . import googleanalyticsadminv1alphafirebaselink
from . import googleanalyticsadminv1alphagoogleadslink
from . import googleanalyticsadminv1alphagooglesignalssettings
from . import googleanalyticsadminv1alphameasurementprotocolsecret
from . import googleanalyticsadminv1alphaproperty
from . import googleanalyticsadminv1alphasearchads360link


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource:
    account: Optional[googleanalyticsadminv1alphaaccount.GoogleAnalyticsAdminV1alphaAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    attribution_settings: Optional[googleanalyticsadminv1alphaattributionsettings.GoogleAnalyticsAdminV1alphaAttributionSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributionSettings' }})
    conversion_event: Optional[googleanalyticsadminv1alphaconversionevent.GoogleAnalyticsAdminV1alphaConversionEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversionEvent' }})
    custom_dimension: Optional[googleanalyticsadminv1alphacustomdimension.GoogleAnalyticsAdminV1alphaCustomDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customDimension' }})
    custom_metric: Optional[googleanalyticsadminv1alphacustommetric.GoogleAnalyticsAdminV1alphaCustomMetric] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customMetric' }})
    data_retention_settings: Optional[googleanalyticsadminv1alphadataretentionsettings.GoogleAnalyticsAdminV1alphaDataRetentionSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataRetentionSettings' }})
    data_stream: Optional[googleanalyticsadminv1alphadatastream.GoogleAnalyticsAdminV1alphaDataStream] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataStream' }})
    display_video360_advertiser_link: Optional[googleanalyticsadminv1alphadisplayvideo360advertiserlink.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayVideo360AdvertiserLink' }})
    display_video360_advertiser_link_proposal: Optional[googleanalyticsadminv1alphadisplayvideo360advertiserlinkproposal.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayVideo360AdvertiserLinkProposal' }})
    firebase_link: Optional[googleanalyticsadminv1alphafirebaselink.GoogleAnalyticsAdminV1alphaFirebaseLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firebaseLink' }})
    google_ads_link: Optional[googleanalyticsadminv1alphagoogleadslink.GoogleAnalyticsAdminV1alphaGoogleAdsLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleAdsLink' }})
    google_signals_settings: Optional[googleanalyticsadminv1alphagooglesignalssettings.GoogleAnalyticsAdminV1alphaGoogleSignalsSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleSignalsSettings' }})
    measurement_protocol_secret: Optional[googleanalyticsadminv1alphameasurementprotocolsecret.GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurementProtocolSecret' }})
    property: Optional[googleanalyticsadminv1alphaproperty.GoogleAnalyticsAdminV1alphaProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    search_ads360_link: Optional[googleanalyticsadminv1alphasearchads360link.GoogleAnalyticsAdminV1alphaSearchAds360Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchAds360Link' }})
    
