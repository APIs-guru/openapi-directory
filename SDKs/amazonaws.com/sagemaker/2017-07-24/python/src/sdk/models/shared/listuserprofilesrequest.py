from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import userprofilesortkey_enum
from . import sortorder_enum


@dataclass_json
@dataclass
class ListUserProfilesRequest:
    domain_id_equals: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainIdEquals' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sort_by: Optional[userprofilesortkey_enum.UserProfileSortKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    sort_order: Optional[sortorder_enum.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    user_profile_name_contains: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserProfileNameContains' }})
    
