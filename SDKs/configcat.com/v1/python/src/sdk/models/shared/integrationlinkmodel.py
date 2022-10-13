from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import integrationlinktype_enum


@dataclass_json
@dataclass
class IntegrationLinkModel:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    integration_link_type: Optional[integrationlinktype_enum.IntegrationLinkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationLinkType' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
