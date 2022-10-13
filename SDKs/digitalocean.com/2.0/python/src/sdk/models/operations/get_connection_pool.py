from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetConnectionPoolPathParams:
    database_cluster_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    pool_name: str = field(default=None, metadata={'path_param': { 'field_name': 'pool_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConnectionPoolRequest:
    path_params: GetConnectionPoolPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetConnectionPool200ApplicationJSON:
    pool: shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pool' }})
    

@dataclass_json
@dataclass
class GetConnectionPool401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetConnectionPoolResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_connection_pool_200_application_json_object: Optional[GetConnectionPool200ApplicationJSON] = field(default=None)
    get_connection_pool_401_application_json_object: Optional[GetConnectionPool401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
