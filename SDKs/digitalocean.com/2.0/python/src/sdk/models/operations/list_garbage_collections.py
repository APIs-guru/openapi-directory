from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListGarbageCollectionsPathParams:
    registry_name: str = field(default=None, metadata={'path_param': { 'field_name': 'registry_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListGarbageCollectionsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ListGarbageCollectionsRequest:
    path_params: ListGarbageCollectionsPathParams = field(default=None)
    query_params: ListGarbageCollectionsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListGarbageCollections200ApplicationJSON:
    garbage_collections: Optional[List[shared.Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'garbage_collections' }})
    

@dataclass_json
@dataclass
class ListGarbageCollections401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListGarbageCollectionsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_garbage_collections_200_application_json_object: Optional[ListGarbageCollections200ApplicationJSON] = field(default=None)
    list_garbage_collections_401_application_json_object: Optional[ListGarbageCollections401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
