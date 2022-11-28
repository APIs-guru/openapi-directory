from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateCollectionFromSchemaPathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    schema_id: str = field(metadata={'path_param': { 'field_name': 'schemaId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCollectionFromSchemaQueryParams:
    workspace: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateCollectionFromSchemaRequestBodyRelations:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class CreateCollectionFromSchemaRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    relations: Optional[List[CreateCollectionFromSchemaRequestBodyRelations]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relations') }})
    

@dataclass_json
@dataclass
class CreateCollectionFromSchema200ApplicationJSONCollection:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class CreateCollectionFromSchema200ApplicationJSONRelations:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class CreateCollectionFromSchema200ApplicationJSON:
    collection: Optional[CreateCollectionFromSchema200ApplicationJSONCollection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    relations: Optional[List[CreateCollectionFromSchema200ApplicationJSONRelations]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relations') }})
    

@dataclass
class CreateCollectionFromSchemaRequest:
    path_params: CreateCollectionFromSchemaPathParams = field()
    query_params: CreateCollectionFromSchemaQueryParams = field()
    request: Optional[CreateCollectionFromSchemaRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCollectionFromSchemaResponse:
    content_type: str = field()
    status_code: int = field()
    create_collection_from_schema_200_application_json_object: Optional[CreateCollectionFromSchema200ApplicationJSON] = field(default=None)
    
