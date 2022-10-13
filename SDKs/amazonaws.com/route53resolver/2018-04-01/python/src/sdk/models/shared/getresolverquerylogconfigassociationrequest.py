from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetResolverQueryLogConfigAssociationRequest:
    resolver_query_log_config_association_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverQueryLogConfigAssociationId' }})
    
