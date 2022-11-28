from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetUsersMeSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetUsersMeUserContactV2UserContactV2Merchant:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class GetUsersMeUserContactV2UserContactV2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    contact_info: Optional[shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactInfo') }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dept_leader: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deptLeader') }})
    merchant: Optional[GetUsersMeUserContactV2UserContactV2Merchant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class GetUsersMeUserContactV2Merchant:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class GetUsersMeUserContactV2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    contact_info: Optional[GetUsersMeUserContactV2UserContactV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactInfo') }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dept_leader: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deptLeader') }})
    merchant: Optional[GetUsersMeUserContactV2Merchant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass
class GetUsersMeRequest:
    security: GetUsersMeSecurity = field()
    

@dataclass
class GetUsersMeResponse:
    content_type: str = field()
    status_code: int = field()
    user_contact_v2: Optional[GetUsersMeUserContactV2] = field(default=None)
    
