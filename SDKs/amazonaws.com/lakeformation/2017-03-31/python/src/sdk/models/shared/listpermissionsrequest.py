from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datalakeprincipal
from . import resource
from . import datalakeresourcetype_enum


@dataclass_json
@dataclass
class ListPermissionsRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    principal: Optional[datalakeprincipal.DataLakePrincipal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Principal' }})
    resource: Optional[resource.Resource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resource' }})
    resource_type: Optional[datalakeresourcetype_enum.DataLakeResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    
