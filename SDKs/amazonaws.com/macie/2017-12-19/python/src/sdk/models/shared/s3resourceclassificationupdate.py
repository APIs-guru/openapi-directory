from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import classificationtypeupdate


@dataclass_json
@dataclass
class S3ResourceClassificationUpdate:
    bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    classification_type_update: classificationtypeupdate.ClassificationTypeUpdate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classificationTypeUpdate' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    
