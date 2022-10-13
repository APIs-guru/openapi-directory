from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resolverquerylogconfigassociation


@dataclass_json
@dataclass
class AssociateResolverQueryLogConfigResponse:
    resolver_query_log_config_association: Optional[resolverquerylogconfigassociation.ResolverQueryLogConfigAssociation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverQueryLogConfigAssociation' }})
    
