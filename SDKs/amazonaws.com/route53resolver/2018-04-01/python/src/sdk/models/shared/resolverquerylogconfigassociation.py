from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resolverquerylogconfigassociationerror_enum
from . import resolverquerylogconfigassociationstatus_enum


@dataclass_json
@dataclass
class ResolverQueryLogConfigAssociation:
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime' }})
    error: Optional[resolverquerylogconfigassociationerror_enum.ResolverQueryLogConfigAssociationErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    resolver_query_log_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverQueryLogConfigId' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    status: Optional[resolverquerylogconfigassociationstatus_enum.ResolverQueryLogConfigAssociationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
