from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetContractTestRelationsPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContractTestRelationsRequest:
    path_params: GetContractTestRelationsPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetContractTestRelations200ApplicationJSONContracttest:
    collection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt' }})
    

@dataclass_json
@dataclass
class GetContractTestRelations200ApplicationJSON:
    contracttest: Optional[List[GetContractTestRelations200ApplicationJSONContracttest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contracttest' }})
    

@dataclass
class GetContractTestRelationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_contract_test_relations_200_application_json_object: Optional[GetContractTestRelations200ApplicationJSON] = field(default=None)
    
