from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class ConnectorResourceSupportedFields:
    unified_property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unified_property' }})
    

@dataclass_json
@dataclass
class ConnectorResourceSupportedListFields:
    unified_property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unified_property' }})
    

@dataclass_json
@dataclass
class ConnectorResource:
    downstream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downstream_id' }})
    downstream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downstream_name' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pagination_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination_supported' }})
    status: Optional[shared.ResourceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    supported_fields: Optional[List[ConnectorResourceSupportedFields]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_fields' }})
    supported_filters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_filters' }})
    supported_list_fields: Optional[List[ConnectorResourceSupportedListFields]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_list_fields' }})
    supported_operations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_operations' }})
    supported_sort_by: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_sort_by' }})
    
