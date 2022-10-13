from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CalendarResource:
    building_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildingId' }})
    capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacity' }})
    etags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etags' }})
    feature_instances: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featureInstances' }})
    floor_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floorName' }})
    floor_section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floorSection' }})
    generated_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generatedResourceName' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    resource_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceCategory' }})
    resource_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceDescription' }})
    resource_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceEmail' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    user_visible_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userVisibleDescription' }})
    
