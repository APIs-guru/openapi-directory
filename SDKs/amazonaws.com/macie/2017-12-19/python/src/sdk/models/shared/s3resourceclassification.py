from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import classificationtype


@dataclass_json
@dataclass
class S3ResourceClassification:
    bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    classification_type: classificationtype.ClassificationType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classificationType' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    
