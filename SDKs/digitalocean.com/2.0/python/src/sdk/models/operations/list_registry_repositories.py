from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListRegistryRepositoriesPathParams:
    registry_name: str = field(default=None, metadata={'path_param': { 'field_name': 'registry_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRegistryRepositoriesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRegistryRepositoriesRequest:
    path_params: ListRegistryRepositoriesPathParams = field(default=None)
    query_params: ListRegistryRepositoriesQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListRegistryRepositories200ApplicationJSONLinksPages1:
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    

@dataclass_json
@dataclass
class ListRegistryRepositories200ApplicationJSONLinksPages2:
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListRegistryRepositories200ApplicationJSONLinks:
    pages: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    

@dataclass_json
@dataclass
class ListRegistryRepositories200ApplicationJSONMeta:
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ListRegistryRepositories200ApplicationJSONRepositoriesLatestTag:
    compressed_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compressed_size_bytes' }})
    manifest_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manifest_digest' }})
    registry_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_name' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository_name' }})
    size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size_bytes' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ListRegistryRepositories200ApplicationJSONRepositories:
    latest_tag: Optional[ListRegistryRepositories200ApplicationJSONRepositoriesLatestTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest_tag' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    registry_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_name' }})
    tag_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag_count' }})
    

@dataclass_json
@dataclass
class ListRegistryRepositories200ApplicationJSON:
    links: Optional[ListRegistryRepositories200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: ListRegistryRepositories200ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    repositories: Optional[List[ListRegistryRepositories200ApplicationJSONRepositories]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories' }})
    

@dataclass_json
@dataclass
class ListRegistryRepositories401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListRegistryRepositoriesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_registry_repositories_200_application_json_object: Optional[ListRegistryRepositories200ApplicationJSON] = field(default=None)
    list_registry_repositories_401_application_json_object: Optional[ListRegistryRepositories401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
