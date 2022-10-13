from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3FileUploadPart:
    part_etag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partEtag' }})
    part_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partNumber' }})
    
