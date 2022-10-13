from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import groupbyattribute_enum


@dataclass_json
@dataclass
class GetComplianceSummaryInput:
    group_by: Optional[List[groupbyattribute_enum.GroupByAttributeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupBy' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaginationToken' }})
    region_filters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionFilters' }})
    resource_type_filters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceTypeFilters' }})
    tag_key_filters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagKeyFilters' }})
    target_id_filters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetIdFilters' }})
    
