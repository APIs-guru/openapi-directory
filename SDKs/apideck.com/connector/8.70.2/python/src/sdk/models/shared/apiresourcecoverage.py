from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import paginationcoverage
from . import supportedproperty
from . import supportedproperty
from . import resourcestatus_enum


@dataclass_json
@dataclass
class APIResourceCoverageCoverage:
    downstream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downstream_id' }})
    downstream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downstream_name' }})
    pagination: Optional[paginationcoverage.PaginationCoverage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    pagination_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination_supported' }})
    supported_fields: Optional[List[supportedproperty.SupportedProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_fields' }})
    supported_filters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_filters' }})
    supported_list_fields: Optional[List[supportedproperty.SupportedProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_list_fields' }})
    supported_operations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_operations' }})
    supported_sort_by: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_sort_by' }})
    

@dataclass_json
@dataclass
class APIResourceCoverage:
    coverage: Optional[List[APIResourceCoverageCoverage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverage' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[resourcestatus_enum.ResourceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
