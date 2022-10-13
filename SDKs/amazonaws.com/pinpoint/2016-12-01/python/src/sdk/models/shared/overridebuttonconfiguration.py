from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import buttonaction_enum


@dataclass_json
@dataclass
class OverrideButtonConfiguration:
    button_action: buttonaction_enum.ButtonActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ButtonAction' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Link' }})
    
