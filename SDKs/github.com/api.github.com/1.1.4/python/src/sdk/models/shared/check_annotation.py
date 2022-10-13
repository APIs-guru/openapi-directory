from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CheckAnnotation:
    annotation_level: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotation_level' }})
    blob_href: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blob_href' }})
    end_column: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_column' }})
    end_line: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_line' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    raw_details: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raw_details' }})
    start_column: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_column' }})
    start_line: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_line' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
