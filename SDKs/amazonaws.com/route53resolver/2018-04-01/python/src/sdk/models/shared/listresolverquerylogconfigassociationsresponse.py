from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resolverquerylogconfigassociation


@dataclass_json
@dataclass
class ListResolverQueryLogConfigAssociationsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resolver_query_log_config_associations: Optional[List[resolverquerylogconfigassociation.ResolverQueryLogConfigAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverQueryLogConfigAssociations' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCount' }})
    total_filtered_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalFilteredCount' }})
    
