from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resolverquerylogconfig


@dataclass_json
@dataclass
class CreateResolverQueryLogConfigResponse:
    resolver_query_log_config: Optional[resolverquerylogconfig.ResolverQueryLogConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverQueryLogConfig' }})
    
