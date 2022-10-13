from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetIntegrationTestRelationsPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIntegrationTestRelationsRequest:
    path_params: GetIntegrationTestRelationsPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetIntegrationTestRelations200ApplicationJSONIntegrationtest:
    collection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt' }})
    

@dataclass_json
@dataclass
class GetIntegrationTestRelations200ApplicationJSON:
    integrationtest: Optional[List[GetIntegrationTestRelations200ApplicationJSONIntegrationtest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationtest' }})
    

@dataclass
class GetIntegrationTestRelationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_integration_test_relations_200_application_json_object: Optional[GetIntegrationTestRelations200ApplicationJSON] = field(default=None)
    
