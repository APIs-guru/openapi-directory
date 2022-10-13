from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import api_core_dto_datapoints_browserbasedestinationitem
from . import api_core_dto_datapoints_multipledestinationitem
from . import api_core_dto_datapoints_datapointretargetinginfo
from . import api_core_dto_datapoints_multipledestinationitem
from . import api_core_dto_datapoints_multipledestinationitem
from . import api_core_dto_datapoints_uniquedestinationitem
from . import api_core_dto_datapoints_urlbylanguageitem
from . import api_core_dto_datapoints_urlbynationitem
from . import api_core_dto_datapoints_weighteddestinationitem

class APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum(str, Enum):
    SIMPLE = "Simple"
    RANDOM_DESTINATION = "RandomDestination"
    DESTINATION_BY_LANGUAGE = "DestinationByLanguage"
    SPILLOVER_DESTINATION = "SpilloverDestination"
    DYNAMIC_URL = "DynamicUrl"
    BROWSER_DESTINATION = "BrowserDestination"
    DESTINATION_BY_NATION = "DestinationByNation"
    UNIQUE_DESTINATION = "UniqueDestination"
    SEQUENTIAL_DESTINATION = "SequentialDestination"
    WEIGHTED_DESTINATION = "WeightedDestination"

class APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum(str, Enum):
    PERMANENT_REDIRECT = "PermanentRedirect"
    TEMPORARY_REDIRECT = "TemporaryRedirect"

class APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum(str, Enum):
    NONE = "None"
    CLEAN = "Clean"
    MYSELF = "Myself"


@dataclass_json
@dataclass
class APICoreDtoDatapointsTrackingLinkSpecifics:
    append_query: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appendQuery' }})
    browser_destination_item: Optional[api_core_dto_datapoints_browserbasedestinationitem.APICoreDtoDatapointsBrowserBaseDestinationItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browserDestinationItem' }})
    destination_mode: Optional[APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationMode' }})
    domain_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainId' }})
    encode_url: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encodeUrl' }})
    expiration_clicks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationClicks' }})
    expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate' }})
    first_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstUrl' }})
    go_domain_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goDomainId' }})
    hide_url: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideUrl' }})
    hide_url_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideUrlTitle' }})
    is_ab_test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isABTest' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    pause_after_clicks_expiration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pauseAfterClicksExpiration' }})
    pause_after_date_expiration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pauseAfterDateExpiration' }})
    random_destination_items: Optional[List[api_core_dto_datapoints_multipledestinationitem.APICoreDtoDatapointsMultipleDestinationItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'randomDestinationItems' }})
    redirect_type: Optional[APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectType' }})
    referrer_clean: Optional[APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referrerClean' }})
    scripts: Optional[List[api_core_dto_datapoints_datapointretargetinginfo.APICoreDtoDatapointsDatapointRetargetingInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scripts' }})
    sequential_destination_items: Optional[List[api_core_dto_datapoints_multipledestinationitem.APICoreDtoDatapointsMultipleDestinationItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequentialDestinationItems' }})
    spillover_destination_items: Optional[List[api_core_dto_datapoints_multipledestinationitem.APICoreDtoDatapointsMultipleDestinationItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spilloverDestinationItems' }})
    unique_destination_item: Optional[api_core_dto_datapoints_uniquedestinationitem.APICoreDtoDatapointsUniqueDestinationItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniqueDestinationItem' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    url_after_clicks_expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlAfterClicksExpiration' }})
    url_after_date_expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlAfterDateExpiration' }})
    urls_by_language: Optional[List[api_core_dto_datapoints_urlbylanguageitem.APICoreDtoDatapointsURLByLanguageItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlsByLanguage' }})
    urls_by_nation: Optional[List[api_core_dto_datapoints_urlbynationitem.APICoreDtoDatapointsURLByNationItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlsByNation' }})
    weighted_destination_items: Optional[List[api_core_dto_datapoints_weighteddestinationitem.APICoreDtoDatapointsWeightedDestinationItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weightedDestinationItems' }})
    
