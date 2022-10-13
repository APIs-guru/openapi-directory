from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDatabaseClusterPathParams:
    database_cluster_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatabaseClusterRequest:
    path_params: GetDatabaseClusterPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetDatabaseCluster200ApplicationJSON:
    database: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    

@dataclass_json
@dataclass
class GetDatabaseCluster401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetDatabaseClusterResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_database_cluster_200_application_json_object: Optional[GetDatabaseCluster200ApplicationJSON] = field(default=None)
    get_database_cluster_401_application_json_object: Optional[GetDatabaseCluster401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
