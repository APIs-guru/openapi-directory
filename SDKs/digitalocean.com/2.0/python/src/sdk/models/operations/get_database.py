from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDatabasePathParams:
    database_cluster_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    database_name: str = field(default=None, metadata={'path_param': { 'field_name': 'database_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatabaseRequest:
    path_params: GetDatabasePathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetDatabase200ApplicationJSON:
    db: shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems = field(default=None, metadata={'dataclasses_json': { 'field_name': 'db' }})
    

@dataclass_json
@dataclass
class GetDatabase401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetDatabaseResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_database_200_application_json_object: Optional[GetDatabase200ApplicationJSON] = field(default=None)
    get_database_401_application_json_object: Optional[GetDatabase401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
