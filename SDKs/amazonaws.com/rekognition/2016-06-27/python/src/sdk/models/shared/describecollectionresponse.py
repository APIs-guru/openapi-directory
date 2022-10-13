from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeCollectionResponse:
    collection_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CollectionARN' }})
    creation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    face_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceCount' }})
    face_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceModelVersion' }})
    
