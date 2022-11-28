from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateAPIApplicationNewAPIApplication:
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ican: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ican') }})
    number_of_payee_approvals_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfPayeeApprovalsRequired') }})
    number_of_payment_approvals_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfPaymentApprovalsRequired') }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    

@dataclass_json
@dataclass
class CreateAPIApplicationAPIApplication:
    application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationId') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientKey') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ican: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ican') }})
    number_of_payee_approvals_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfPayeeApprovalsRequired') }})
    number_of_payment_approvals_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfPaymentApprovalsRequired') }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshToken') }})
    

@dataclass
class CreateAPIApplicationRequest:
    request: CreateAPIApplicationNewAPIApplication = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAPIApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    api_application: Optional[CreateAPIApplicationAPIApplication] = field(default=None)
    
