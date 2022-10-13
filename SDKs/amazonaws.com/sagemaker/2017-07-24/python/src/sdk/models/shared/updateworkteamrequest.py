from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import memberdefinition
from . import notificationconfiguration


@dataclass_json
@dataclass
class UpdateWorkteamRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    member_definitions: Optional[List[memberdefinition.MemberDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemberDefinitions' }})
    notification_configuration: Optional[notificationconfiguration.NotificationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationConfiguration' }})
    workteam_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkteamName' }})
    
