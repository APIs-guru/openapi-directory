from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetResolverQueryLogConfigRequest:
    resolver_query_log_config_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverQueryLogConfigId' }})
    
