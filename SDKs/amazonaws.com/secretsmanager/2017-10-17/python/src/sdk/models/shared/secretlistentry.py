from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rotationrulestype
from . import tag


@dataclass_json
@dataclass
class SecretListEntry:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ARN' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    last_accessed_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastAccessedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_changed_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastChangedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_rotated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastRotatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owning_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwningService' }})
    primary_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryRegion' }})
    rotation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RotationEnabled' }})
    rotation_lambda_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RotationLambdaARN' }})
    rotation_rules: Optional[rotationrulestype.RotationRulesType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RotationRules' }})
    secret_versions_to_stages: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretVersionsToStages' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
