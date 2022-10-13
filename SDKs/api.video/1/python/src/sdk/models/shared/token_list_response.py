from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import upload_token
from . import pagination


@dataclass_json
@dataclass
class TokenListResponse:
    data: List[upload_token.UploadToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    pagination: pagination.Pagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    
