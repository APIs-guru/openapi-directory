from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateOnlineMigrationPathParams:
    database_cluster_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOnlineMigrationRequestBody:
    disable_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disable_ssl' }})
    source: Optional[shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesConnectionAllOf0] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    

@dataclass
class UpdateOnlineMigrationRequest:
    path_params: UpdateOnlineMigrationPathParams = field(default=None)
    request: UpdateOnlineMigrationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateOnlineMigration200ApplicationJSON:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class UpdateOnlineMigration401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class UpdateOnlineMigrationResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    update_online_migration_200_application_json_object: Optional[UpdateOnlineMigration200ApplicationJSON] = field(default=None)
    update_online_migration_401_application_json_object: Optional[UpdateOnlineMigration401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
