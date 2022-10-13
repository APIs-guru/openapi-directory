from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class PepOrderTypeEnum(str, Enum):
    UNKNOWN = ""
    B = "B"
    P = "P"


@dataclass
class PepOrderPathParams:
    search: str = field(default=None, metadata={'path_param': { 'field_name': 'search', 'style': 'simple', 'explode': False }})
    type: PepOrderTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class PepOrderRequestBody:
    aliases: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Aliases' }})
    country: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Country' }})
    dob: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DOB' }})
    family_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FamilyName' }})
    filters: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Filters' }})
    given_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'GivenName' }})
    lei: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'LEI' }})
    locale: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Locale' }})
    medialists: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Medialists' }})
    middle_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'MiddleName' }})
    monitoring: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Monitoring' }})
    peplists: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Peplists' }})
    region: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Region' }})
    smart_match: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'SmartMatch' }})
    watchlists: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Watchlists' }})
    webhook: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhook' }})
    

@dataclass
class PepOrderSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PepOrderRequest:
    path_params: PepOrderPathParams = field(default=None)
    request: Optional[PepOrderRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: PepOrderSecurity = field(default=None)
    

@dataclass
class PepOrderResponse:
    content_type: str = field(default=None)
    pep_order_200_application_json_any: Optional[Any] = field(default=None)
    pep_order_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
