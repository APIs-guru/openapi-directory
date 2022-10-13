from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import apprestrictionsschema
from . import trackinfo
from . import appversion
from . import productpermission
from . import productsigningcertificate

class ProductAvailableTracksEnum(str, Enum):
    APP_TRACK_UNSPECIFIED = "appTrackUnspecified"
    PRODUCTION = "production"
    BETA = "beta"
    ALPHA = "alpha"

class ProductContentRatingEnum(str, Enum):
    RATING_UNKNOWN = "ratingUnknown"
    ALL = "all"
    PRE_TEEN = "preTeen"
    TEEN = "teen"
    MATURE = "mature"

class ProductDistributionChannelEnum(str, Enum):
    PUBLIC_GOOGLE_HOSTED = "publicGoogleHosted"
    PRIVATE_GOOGLE_HOSTED = "privateGoogleHosted"
    PRIVATE_SELF_HOSTED = "privateSelfHosted"

class ProductFeaturesEnum(str, Enum):
    FEATURE_UNKNOWN = "featureUnknown"
    VPN_APP = "vpnApp"

class ProductProductPricingEnum(str, Enum):
    UNKNOWN = "unknown"
    FREE = "free"
    FREE_WITH_IN_APP_PURCHASE = "freeWithInAppPurchase"
    PAID = "paid"


@dataclass_json
@dataclass
class Product:
    app_restrictions_schema: Optional[apprestrictionsschema.AppRestrictionsSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appRestrictionsSchema' }})
    app_tracks: Optional[List[trackinfo.TrackInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appTracks' }})
    app_version: Optional[List[appversion.AppVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appVersion' }})
    author_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorName' }})
    available_countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableCountries' }})
    available_tracks: Optional[List[ProductAvailableTracksEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableTracks' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    content_rating: Optional[ProductContentRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentRating' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    details_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailsUrl' }})
    distribution_channel: Optional[ProductDistributionChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributionChannel' }})
    features: Optional[List[ProductFeaturesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconUrl' }})
    last_updated_timestamp_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedTimestampMillis' }})
    min_android_sdk_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minAndroidSdkVersion' }})
    permissions: Optional[List[productpermission.ProductPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    product_pricing: Optional[ProductProductPricingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productPricing' }})
    recent_changes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recentChanges' }})
    requires_container_app: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiresContainerApp' }})
    screenshot_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenshotUrls' }})
    signing_certificate: Optional[productsigningcertificate.ProductSigningCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingCertificate' }})
    small_icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smallIconUrl' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    work_details_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workDetailsUrl' }})
    
