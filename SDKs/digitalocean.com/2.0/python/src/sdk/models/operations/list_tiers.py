from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class ListTiers200ApplicationJSONTiers:
    build_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_seconds' }})
    egress_bandwidth_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'egress_bandwidth_bytes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    storage_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storage_bytes' }})
    

@dataclass_json
@dataclass
class ListTiers200ApplicationJSON:
    tiers: Optional[List[ListTiers200ApplicationJSONTiers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tiers' }})
    

@dataclass_json
@dataclass
class ListTiers401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListTiersResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_tiers_200_application_json_object: Optional[ListTiers200ApplicationJSON] = field(default=None)
    list_tiers_401_application_json_object: Optional[ListTiers401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
