from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class SyncRelationsWithSchemaPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    entity_id: str = field(default=None, metadata={'path_param': { 'field_name': 'entityId', 'style': 'simple', 'explode': False }})
    entity_type: str = field(default=None, metadata={'path_param': { 'field_name': 'entityType', 'style': 'simple', 'explode': False }})
    

@dataclass
class SyncRelationsWithSchemaRequest:
    path_params: SyncRelationsWithSchemaPathParams = field(default=None)
    

@dataclass_json
@dataclass
class SyncRelationsWithSchema200ApplicationJSON:
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

@dataclass_json
@dataclass
class SyncRelationsWithSchema400ApplicationJSONError:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class SyncRelationsWithSchema400ApplicationJSON:
    error: Optional[SyncRelationsWithSchema400ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    

@dataclass
class SyncRelationsWithSchemaResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    sync_relations_with_schema_200_application_json_object: Optional[SyncRelationsWithSchema200ApplicationJSON] = field(default=None)
    sync_relations_with_schema_400_application_json_object: Optional[SyncRelationsWithSchema400ApplicationJSON] = field(default=None)
    
