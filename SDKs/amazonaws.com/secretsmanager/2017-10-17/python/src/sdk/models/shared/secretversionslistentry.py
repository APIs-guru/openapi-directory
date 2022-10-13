from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SecretVersionsListEntry:
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    kms_key_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyIds' }})
    last_accessed_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastAccessedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionId' }})
    version_stages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionStages' }})
    
