from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateRelationsPathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateRelationsRequestBody:
    contracttest: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contracttest') }})
    documentation: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    mock: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mock') }})
    testsuite: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testsuite') }})
    

@dataclass_json
@dataclass
class CreateRelations200ApplicationJSON:
    contracttest: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contracttest') }})
    documentation: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    testsuite: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testsuite') }})
    

@dataclass
class CreateRelationsRequest:
    path_params: CreateRelationsPathParams = field()
    request: Optional[CreateRelationsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateRelationsResponse:
    content_type: str = field()
    status_code: int = field()
    create_relations_200_application_json_object: Optional[CreateRelations200ApplicationJSON] = field(default=None)
    
