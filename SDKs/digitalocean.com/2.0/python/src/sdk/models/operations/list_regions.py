from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class ListRegions200ApplicationJSON:
    regions: Optional[List[shared.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsPropertiesRegion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    

@dataclass_json
@dataclass
class ListRegions401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListRegionsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_regions_200_application_json_object: Optional[ListRegions200ApplicationJSON] = field(default=None)
    list_regions_401_application_json_object: Optional[ListRegions401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
