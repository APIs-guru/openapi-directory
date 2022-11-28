from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetDocumentationRelationsPathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetDocumentationRelations200ApplicationJSONDocumentation:
    collection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    

@dataclass_json
@dataclass
class GetDocumentationRelations200ApplicationJSON:
    documentation: Optional[List[GetDocumentationRelations200ApplicationJSONDocumentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    

@dataclass
class GetDocumentationRelationsRequest:
    path_params: GetDocumentationRelationsPathParams = field()
    

@dataclass
class GetDocumentationRelationsResponse:
    content_type: str = field()
    status_code: int = field()
    get_documentation_relations_200_application_json_object: Optional[GetDocumentationRelations200ApplicationJSON] = field(default=None)
    
