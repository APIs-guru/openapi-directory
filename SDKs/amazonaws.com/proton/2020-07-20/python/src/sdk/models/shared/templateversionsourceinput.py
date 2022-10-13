from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3objectsource


@dataclass_json
@dataclass
class TemplateVersionSourceInput:
    s3: Optional[s3objectsource.S3ObjectSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3' }})
    
