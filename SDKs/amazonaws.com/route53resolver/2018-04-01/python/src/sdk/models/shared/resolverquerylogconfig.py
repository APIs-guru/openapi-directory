from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sharestatus_enum
from . import resolverquerylogconfigstatus_enum


@dataclass_json
@dataclass
class ResolverQueryLogConfig:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    association_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationCount' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime' }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorRequestId' }})
    destination_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationArn' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerId' }})
    share_status: Optional[sharestatus_enum.ShareStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareStatus' }})
    status: Optional[resolverquerylogconfigstatus_enum.ResolverQueryLogConfigStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
