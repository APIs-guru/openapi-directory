from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import minimal_repository
from . import search_result_text_matches


@dataclass_json
@dataclass
class CodeSearchResultItem:
    file_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_size' }})
    git_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_url' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    last_modified_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_modified_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    line_numbers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line_numbers' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    repository: minimal_repository.MinimalRepository = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    score: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    text_matches: Optional[List[search_result_text_matches.SearchResultTextMatches]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text_matches' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
