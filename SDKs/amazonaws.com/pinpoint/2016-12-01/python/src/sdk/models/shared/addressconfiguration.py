from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import channeltype_enum


@dataclass_json
@dataclass
class AddressConfiguration:
    body_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BodyOverride' }})
    channel_type: Optional[channeltype_enum.ChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelType' }})
    context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Context' }})
    raw_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RawContent' }})
    substitutions: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Substitutions' }})
    title_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TitleOverride' }})
    
