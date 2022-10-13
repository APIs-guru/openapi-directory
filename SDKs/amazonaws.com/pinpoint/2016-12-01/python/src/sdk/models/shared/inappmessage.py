from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import inappmessagecontent
from . import layout_enum


@dataclass_json
@dataclass
class InAppMessage:
    content: Optional[List[inappmessagecontent.InAppMessageContent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    custom_config: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomConfig' }})
    layout: Optional[layout_enum.LayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Layout' }})
    
