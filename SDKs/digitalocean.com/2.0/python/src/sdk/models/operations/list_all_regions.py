from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListAllRegionsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAllRegionsRequest:
    query_params: ListAllRegionsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListAllRegions200ApplicationJSONLinksPages1:
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    

@dataclass_json
@dataclass
class ListAllRegions200ApplicationJSONLinksPages2:
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListAllRegions200ApplicationJSONLinks:
    pages: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    

@dataclass_json
@dataclass
class ListAllRegions200ApplicationJSONMeta:
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ListAllRegions200ApplicationJSON:
    links: Optional[ListAllRegions200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: ListAllRegions200ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    regions: List[shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    

@dataclass_json
@dataclass
class ListAllRegions401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListAllRegionsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_all_regions_200_application_json_object: Optional[ListAllRegions200ApplicationJSON] = field(default=None)
    list_all_regions_401_application_json_object: Optional[ListAllRegions401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
