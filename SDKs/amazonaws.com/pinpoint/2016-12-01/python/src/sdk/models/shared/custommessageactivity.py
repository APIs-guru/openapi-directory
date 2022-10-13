from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import __endpointtypeselement_enum
from . import journeycustommessage


@dataclass_json
@dataclass
class CustomMessageActivity:
    delivery_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryUri' }})
    endpoint_types: Optional[List[__endpointtypeselement_enum.EndpointTypesElementEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointTypes' }})
    message_config: Optional[journeycustommessage.JourneyCustomMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageConfig' }})
    next_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextActivity' }})
    template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateName' }})
    template_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateVersion' }})
    
