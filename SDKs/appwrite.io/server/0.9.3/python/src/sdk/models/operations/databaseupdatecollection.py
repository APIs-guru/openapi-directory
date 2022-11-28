from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DatabaseUpdateCollectionPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DatabaseUpdateCollectionRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    read: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    rules: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    write: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('write') }})
    

@dataclass
class DatabaseUpdateCollectionSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseUpdateCollectionRequest:
    path_params: DatabaseUpdateCollectionPathParams = field()
    security: DatabaseUpdateCollectionSecurity = field()
    request: Optional[DatabaseUpdateCollectionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DatabaseUpdateCollectionResponse:
    content_type: str = field()
    status_code: int = field()
    collection: Optional[shared.Collection] = field(default=None)
    
