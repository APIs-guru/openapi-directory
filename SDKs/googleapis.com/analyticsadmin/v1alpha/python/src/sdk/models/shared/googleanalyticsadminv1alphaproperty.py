from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum(str, Enum):
    INDUSTRY_CATEGORY_UNSPECIFIED = "INDUSTRY_CATEGORY_UNSPECIFIED"
    AUTOMOTIVE = "AUTOMOTIVE"
    BUSINESS_AND_INDUSTRIAL_MARKETS = "BUSINESS_AND_INDUSTRIAL_MARKETS"
    FINANCE = "FINANCE"
    HEALTHCARE = "HEALTHCARE"
    TECHNOLOGY = "TECHNOLOGY"
    TRAVEL = "TRAVEL"
    OTHER = "OTHER"
    ARTS_AND_ENTERTAINMENT = "ARTS_AND_ENTERTAINMENT"
    BEAUTY_AND_FITNESS = "BEAUTY_AND_FITNESS"
    BOOKS_AND_LITERATURE = "BOOKS_AND_LITERATURE"
    FOOD_AND_DRINK = "FOOD_AND_DRINK"
    GAMES = "GAMES"
    HOBBIES_AND_LEISURE = "HOBBIES_AND_LEISURE"
    HOME_AND_GARDEN = "HOME_AND_GARDEN"
    INTERNET_AND_TELECOM = "INTERNET_AND_TELECOM"
    LAW_AND_GOVERNMENT = "LAW_AND_GOVERNMENT"
    NEWS = "NEWS"
    ONLINE_COMMUNITIES = "ONLINE_COMMUNITIES"
    PEOPLE_AND_SOCIETY = "PEOPLE_AND_SOCIETY"
    PETS_AND_ANIMALS = "PETS_AND_ANIMALS"
    REAL_ESTATE = "REAL_ESTATE"
    REFERENCE = "REFERENCE"
    SCIENCE = "SCIENCE"
    SPORTS = "SPORTS"
    JOBS_AND_EDUCATION = "JOBS_AND_EDUCATION"
    SHOPPING = "SHOPPING"

class GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum(str, Enum):
    PROPERTY_TYPE_UNSPECIFIED = "PROPERTY_TYPE_UNSPECIFIED"
    PROPERTY_TYPE_ORDINARY = "PROPERTY_TYPE_ORDINARY"
    PROPERTY_TYPE_SUBPROPERTY = "PROPERTY_TYPE_SUBPROPERTY"
    PROPERTY_TYPE_ROLLUP = "PROPERTY_TYPE_ROLLUP"

class GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum(str, Enum):
    SERVICE_LEVEL_UNSPECIFIED = "SERVICE_LEVEL_UNSPECIFIED"
    GOOGLE_ANALYTICS_STANDARD = "GOOGLE_ANALYTICS_STANDARD"
    GOOGLE_ANALYTICS_360 = "GOOGLE_ANALYTICS_360"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaProperty:
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    industry_category: Optional[GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'industryCategory' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    property_type: Optional[GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyType' }})
    service_level: Optional[GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceLevel' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
