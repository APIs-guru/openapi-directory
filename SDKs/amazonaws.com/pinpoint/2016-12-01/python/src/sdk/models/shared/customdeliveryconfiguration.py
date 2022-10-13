from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import __endpointtypeselement_enum


@dataclass_json
@dataclass
class CustomDeliveryConfiguration:
    delivery_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryUri' }})
    endpoint_types: Optional[List[__endpointtypeselement_enum.EndpointTypesElementEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointTypes' }})
    
