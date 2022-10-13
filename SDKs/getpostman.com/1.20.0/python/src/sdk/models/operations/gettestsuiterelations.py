from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetTestSuiteRelationsPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTestSuiteRelationsRequest:
    path_params: GetTestSuiteRelationsPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetTestSuiteRelations200ApplicationJSONTestsuite:
    collection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt' }})
    

@dataclass_json
@dataclass
class GetTestSuiteRelations200ApplicationJSON:
    testsuite: Optional[List[GetTestSuiteRelations200ApplicationJSONTestsuite]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testsuite' }})
    

@dataclass
class GetTestSuiteRelationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_test_suite_relations_200_application_json_object: Optional[GetTestSuiteRelations200ApplicationJSON] = field(default=None)
    
