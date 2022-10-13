from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserDeletionRequestID:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

@dataclass_json
@dataclass
class UserDeletionRequest:
    deletion_request_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletionRequestTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    firebase_project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firebaseProjectId' }})
    id: Optional[UserDeletionRequestID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyId' }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webPropertyId' }})
    
