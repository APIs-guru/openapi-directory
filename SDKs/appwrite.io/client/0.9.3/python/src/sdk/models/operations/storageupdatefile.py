from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class StorageUpdateFilePathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class StorageUpdateFileRequestBody:
    read: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    write: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('write') }})
    

@dataclass
class StorageUpdateFileSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StorageUpdateFileRequest:
    path_params: StorageUpdateFilePathParams = field()
    security: StorageUpdateFileSecurity = field()
    request: Optional[StorageUpdateFileRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StorageUpdateFileResponse:
    content_type: str = field()
    status_code: int = field()
    file: Optional[shared.File] = field(default=None)
    
