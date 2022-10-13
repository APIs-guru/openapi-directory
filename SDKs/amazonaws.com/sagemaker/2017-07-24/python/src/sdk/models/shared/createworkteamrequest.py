from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import memberdefinition
from . import notificationconfiguration
from . import tag


@dataclass_json
@dataclass
class CreateWorkteamRequest:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    member_definitions: List[memberdefinition.MemberDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemberDefinitions' }})
    notification_configuration: Optional[notificationconfiguration.NotificationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationConfiguration' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    workforce_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkforceName' }})
    workteam_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkteamName' }})
    
