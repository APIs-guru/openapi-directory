from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import action_enum


@dataclass_json
@dataclass
class DefaultPushNotificationMessage:
    action: Optional[action_enum.ActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    silent_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SilentPush' }})
    substitutions: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Substitutions' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    
