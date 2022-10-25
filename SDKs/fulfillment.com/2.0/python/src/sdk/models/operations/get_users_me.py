from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetUsersMeSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersMeRequest:
    security: GetUsersMeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetUsersMeUserContactV2UserContactV2Merchant:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class GetUsersMeUserContactV2UserContactV2:
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey' }})
    contact_info: Optional[shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactInfo' }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dept_leader: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deptLeader' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    merchant: Optional[GetUsersMeUserContactV2UserContactV2Merchant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class GetUsersMeUserContactV2Merchant:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class GetUsersMeUserContactV2:
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey' }})
    contact_info: Optional[GetUsersMeUserContactV2UserContactV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactInfo' }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dept_leader: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deptLeader' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    merchant: Optional[GetUsersMeUserContactV2Merchant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass
class GetUsersMeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_contact_v2: Optional[GetUsersMeUserContactV2] = field(default=None)
    
