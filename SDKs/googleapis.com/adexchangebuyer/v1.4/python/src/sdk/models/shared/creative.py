from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreativeAdTechnologyProviders:
    detected_provider_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedProviderIds') }})
    has_unidentified_provider: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasUnidentifiedProvider') }})
    

@dataclass_json
@dataclass
class CreativeCorrectionsContexts:
    auction_type: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auctionType') }})
    context_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextType') }})
    geo_criteria_id: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoCriteriaId') }})
    platform: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    

@dataclass_json
@dataclass
class CreativeCorrections:
    contexts: Optional[List[CreativeCorrectionsContexts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    details: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclass
class CreativeFilteringReasonsReasons:
    filtering_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteringCount') }})
    filtering_status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteringStatus') }})
    

@dataclass_json
@dataclass
class CreativeFilteringReasons:
    r"""CreativeFilteringReasons
    The filtering reasons for the creative. Read-only. This field should not be set in requests.
    """
    
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    reasons: Optional[List[CreativeFilteringReasonsReasons]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasons') }})
    

@dataclass_json
@dataclass
class CreativeNativeAdAppIcon:
    r"""CreativeNativeAdAppIcon
    The app icon, for app download ads.
    """
    
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class CreativeNativeAdImage:
    r"""CreativeNativeAdImage
    A large image.
    """
    
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class CreativeNativeAdLogo:
    r"""CreativeNativeAdLogo
    A smaller image, for the advertiser logo.
    """
    
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class CreativeNativeAd:
    r"""CreativeNativeAd
    If nativeAd is set, HTMLSnippet, videoVastXML, and the videoURL outside of nativeAd should not be set. (The videoURL inside nativeAd can be set.)
    """
    
    advertiser: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiser') }})
    app_icon: Optional[CreativeNativeAdAppIcon] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appIcon') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    call_to_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callToAction') }})
    click_link_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickLinkUrl') }})
    click_tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickTrackingUrl') }})
    headline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headline') }})
    image: Optional[CreativeNativeAdImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    impression_tracking_url: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionTrackingUrl') }})
    logo: Optional[CreativeNativeAdLogo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    star_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starRating') }})
    video_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoURL') }})
    

@dataclass_json
@dataclass
class CreativeServingRestrictionsContexts:
    auction_type: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auctionType') }})
    context_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextType') }})
    geo_criteria_id: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoCriteriaId') }})
    platform: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    

@dataclass_json
@dataclass
class CreativeServingRestrictionsDisapprovalReasons:
    details: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclass
class CreativeServingRestrictions:
    contexts: Optional[List[CreativeServingRestrictionsContexts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    disapproval_reasons: Optional[List[CreativeServingRestrictionsDisapprovalReasons]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disapprovalReasons') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclass
class Creative:
    r"""Creative
    A creative and its classification data.
    """
    
    html_snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HTMLSnippet') }})
    account_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    ad_choices_destination_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adChoicesDestinationUrl') }})
    ad_technology_providers: Optional[CreativeAdTechnologyProviders] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adTechnologyProviders') }})
    advertiser_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    advertiser_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserName') }})
    agency_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agencyId') }})
    api_upload_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiUploadTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    attribute: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    buyer_creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerCreativeId') }})
    click_through_url: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrl') }})
    corrections: Optional[List[CreativeCorrections]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corrections') }})
    creative_status_identity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeStatusIdentityType') }})
    deals_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealsStatus') }})
    detected_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedDomains') }})
    filtering_reasons: Optional[CreativeFilteringReasons] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteringReasons') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    impression_tracking_url: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionTrackingUrl') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    native_ad: Optional[CreativeNativeAd] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativeAd') }})
    open_auction_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openAuctionStatus') }})
    product_categories: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCategories') }})
    restricted_categories: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedCategories') }})
    sensitive_categories: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitiveCategories') }})
    serving_restrictions: Optional[List[CreativeServingRestrictions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingRestrictions') }})
    vendor_type: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendorType') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    video_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoURL') }})
    video_vast_xml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoVastXML') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
