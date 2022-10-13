from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ListInstanceSizes200ApplicationJSONInstanceSizesCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    SHARED = "SHARED"
    DEDICATED = "DEDICATED"


@dataclass_json
@dataclass
class ListInstanceSizes200ApplicationJSONInstanceSizes:
    cpu_type: Optional[ListInstanceSizes200ApplicationJSONInstanceSizesCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu_type' }})
    cpus: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpus' }})
    memory_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory_bytes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    tier_downgrade_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier_downgrade_to' }})
    tier_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier_slug' }})
    tier_upgrade_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier_upgrade_to' }})
    usd_per_month: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usd_per_month' }})
    usd_per_second: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usd_per_second' }})
    

@dataclass_json
@dataclass
class ListInstanceSizes200ApplicationJSON:
    discount_percent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount_percent' }})
    instance_sizes: Optional[List[ListInstanceSizes200ApplicationJSONInstanceSizes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_sizes' }})
    

@dataclass_json
@dataclass
class ListInstanceSizes401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListInstanceSizesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_instance_sizes_200_application_json_object: Optional[ListInstanceSizes200ApplicationJSON] = field(default=None)
    list_instance_sizes_401_application_json_object: Optional[ListInstanceSizes401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
