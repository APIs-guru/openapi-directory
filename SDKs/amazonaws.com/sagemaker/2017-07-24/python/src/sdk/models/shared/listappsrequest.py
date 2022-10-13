from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import appsortkey_enum
from . import sortorder_enum


@dataclass_json
@dataclass
class ListAppsRequest:
    domain_id_equals: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainIdEquals' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sort_by: Optional[appsortkey_enum.AppSortKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    sort_order: Optional[sortorder_enum.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    user_profile_name_equals: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserProfileNameEquals' }})
    
